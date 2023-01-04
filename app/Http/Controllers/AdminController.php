<?php
 
namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
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
    public function logout(){
        Session::flush();        
        Auth::logout();
        return redirect()->route('admin_login');
    }
}