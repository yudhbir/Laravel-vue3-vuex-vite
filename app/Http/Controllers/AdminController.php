<?php
 
namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Breed;
use App\Models\Puppies;
use Session;
use File;
use DB;
 
class AdminController extends Controller{
    
    public $successStatus = 200;

    public function index(Request $request){
        // if (Auth::user() && Auth::user()->role==1) {
        //     return redirect()->route('admin_dashboard'); 
        // }
        if ($request->isMethod('post')) {
            $email=$request->email;
            $password=$request->password;

            if(empty($email) || empty($password)){
                return response()->json(['success' => false,'error'=>'email and password should not be blank'], 401);  
            }            
            if (Auth::attempt(['email' => $email, 'password' => $password, 'role' => 1])) {
                $user = Auth::user();
                $token=encryption($user->id);
                return response()->json(['success' => true,'user'=>$user,'token'=>$token], $this->successStatus);
            }else{
                 return response()->json(['success' => false,'error'=>'Unauthorised'], 401);
            }
        }
        return view('admin.login');
    } 
    public function breed(Request $request,$all=null){
        $result=(!empty($all))?Breed::all():Breed::paginate(10);
        $heading="Breed";
        return response()->json(['success' => true,'result'=>$result,'heading'=>$heading], $this->successStatus);
    }
    public function breed_edit(Request $request,$id=null){        
        if ($request->isMethod('post')) {
            $lastInsertedId="";
            $msg="";
            $data_info=['breed'=>$request->breed_name,'type'=>$request->breed_type,'doodle'=>(!empty($request->doodle))?$request->doodle:0];
            if(!empty($request->breed_id)){
                Breed::where('id', $request->breed_id)->update($data_info);
                $lastInsertedId=true;
                $msg="updated";
            }else{
                $result= Breed::create($data_info);
                $lastInsertedId=$result->id;
                $msg="created";
            }
            if (!empty($lastInsertedId)) {
                return response()->json(['success' => true,'result'=>[],'msg'=>'Record has been '.$msg.' successfully.'], $this->successStatus);
            }else{
                return response()->json(['success' => false,'result'=>[],'msg'=>'Record has not been '.$msg.' successfully.'], 401);
            }
        }
        $result="";
        $heading="Brand";
        if(!empty($id)){
            $result = Breed::find($id);
        }
        return response()->json(['success' => true,'result'=>$result,'heading'=>$heading], $this->successStatus);
    }
    public function breed_delete(Request $request,$id=null){ 
        Breed::where('id', $id)->delete();
        return response()->json(['success' => true,'result'=>[],'msg'=>'Record has been deleted successfully.'], $this->successStatus);
    }
    public function puppies(Request $request){
        $result=Puppies::select('tbl_puppies.*')->Join('tbl_breed', 'tbl_puppies.breed', '=', 'tbl_breed.id');
        $heading="Puppies";
        if(!empty($request->query('age'))){
            if(!in_array('all',$request->query('age'))){
                if(in_array('20',$request->query('age'))){
                    $result->where(DB::raw('FLOOR(DATEDIFF(DATE(now()), DATE(dob))/7)'),'>', "16");
                }else{
                    $result->whereIn(DB::raw('FLOOR(DATEDIFF(DATE(now()), DATE(dob))/7)'), $request->query('age'));
                }
            }
        }
        if(!empty($request->query('breed'))){
            $result->whereIn('tbl_puppies.breed', $request->query('breed'));
        }
        if(!empty($request->query('gender'))){
            $gender=$request->query('gender');
            if(in_array('3',$gender)){
                $gender[]=1;
                $gender[]=2;
            }
            $gender=array_unique($gender);
            $result->whereIn('gender', $gender);
        }
        if(!empty($request->query('color'))){
            $result->whereIn('color', $request->query('color'));
        }
        if(!empty($request->query('doodle'))){
            $result->where('tbl_breed.doodle', 1);
        }
        $result=$result->paginate(10);
        return response()->json(['success' => true,'result'=>$result,'heading'=>$heading], $this->successStatus);
    }
    public function puppies_edit(Request $request,$id=null){        
        if ($request->isMethod('post')) {
            $lastInsertedId="";
            $msg="";
            $data_info=$request->all();
            // dd($data_info);
            $puppy_id="";
            if(!empty($data_info['puppies_image']) && !empty($data_info['imageUrl'])){
                $image_data=$data_info['imageUrl'];
                list($type, $image_data) = explode(';', $image_data);
                list(, $image_data)      = explode(',', $image_data);
                $image_data = base64_decode($image_data);
                $file_name=time().'_'.$data_info['puppies_image'];
                $storage_path='uploads/puppies/';         
                $destinationPath = public_path().'/'.$storage_path;
                File::makeDirectory($destinationPath, $mode = 0777, true, true);

                $destinationPath = $destinationPath.''.$file_name;
                file_put_contents($destinationPath, $image_data);

                $storage_path='/'.$storage_path.$file_name;  
                $data_info['imageUrl']=$storage_path;

            }
            if(!empty($data_info['puppies_name'])){
                $data_info['name']=$data_info['puppies_name'];
                unset($data_info['puppies_name']);
                if(!empty($data_info['puppy_id'])){
                    $puppy_id= $request->puppy_id;
                }
                unset($data_info['puppy_id']);
                $data_info['dob']=date('Y-m-d',strtotime($data_info['dob']));              
            }
            if(!empty($puppy_id)){
                Puppies::where('id', $puppy_id)->update($data_info);
                $lastInsertedId=true;
                $msg="updated";
            }else{
                $result= Puppies::create($data_info);
                $lastInsertedId=$result->id;
                $msg="created";
            }
            if (!empty($lastInsertedId)) {
                return response()->json(['success' => true,'result'=>[],'msg'=>'Record has been '.$msg.' successfully.'], $this->successStatus);
            }else{
                return response()->json(['success' => false,'result'=>[],'msg'=>'Record has not been '.$msg.' successfully.'], 401);
            }
        }
        $result="";
        $heading="Puppies";
        if(!empty($id)){
            $result = Puppies::find($id);
        }
        return response()->json(['success' => true,'result'=>$result,'heading'=>$heading], $this->successStatus);
    }
    public function puppies_delete(Request $request,$id=null){ 
        Puppies::where('id', $id)->delete();
        return redirect()->route('admin_ammunition_brands')->with('success','Record has been deleted successfully.');
    }  
    public function logout(){
        Session::flush();        
        Auth::logout();
        return redirect()->route('admin_login');
    }
}