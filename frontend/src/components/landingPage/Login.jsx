
import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUserThunk } from "@/reducers/authReducer";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ formData, setFormData ] = useState({
        email:'',
        password:''
    });

    const handleSubmit = async(e) => {
        try {
            e.preventDefault();
            const result = await dispatch(loginUserThunk(formData));
            if(result.payload.success){
                toast.success('User logged In');
                navigate('/home');
            }
            else{
                toast.error(result.payload.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <Card>
            <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
                Sign in with your email address
            </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
            <CardContent className="space-y-2">
            <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input 
                id="email" 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email:e.target.value})} />
            </div>
            <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input 
                id="password" 
                type="password" 
                value={formData.password}
                onChange={(e) => setFormData({...formData, password:e.target.value})} />
            </div>
            </CardContent>
            <CardFooter>
            <Button type="submit" onClick={handleSubmit}>Sign In</Button>
            </CardFooter>
            </form>
        </Card>
    );
};

export default Login;
