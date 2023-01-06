<?php
 
namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Breed;
use App\Models\Puppies;
use Session;
 
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
        $result=Puppies::paginate(10);
        $heading="Puppies";
        return response()->json(['success' => true,'result'=>$result,'heading'=>$heading], $this->successStatus);
    }
    public function puppies_edit(Request $request,$id=null){        
        if ($request->isMethod('post')) {
            $lastInsertedId="";
            $msg="";
            $data_info=$request->all();
            if(!empty($data_info['puppies_name'])){
                $data_info['name']=$data_info['puppies_name'];
                unset($data_info['puppies_name']);
            }
            if(!empty($request->puppy_id)){
                Puppies::where('id', $request->puppy_id)->update($data_info);
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