
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
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
        <Dialog>
        <DialogTrigger asChild className="mx-3">
            <Button variant="link" size="lg">
            Sign in
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
            <DialogTitle>Sign in</DialogTitle>
            <DialogDescription>Sign in with your email address</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-left">
                Email
                </Label>
                <Input 
                    id="email" 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email:e.target.value})}
                    className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-left">
                Password
                </Label>
                <Input 
                    id="password"
                    type="password" 
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password:e.target.value})}
                    className="col-span-3" />
            </div>
            </div>
            <DialogFooter>
                <Button type="submit" onClick={handleSubmit}>
                    Login
                </Button>
            </DialogFooter>
            </form>
        </DialogContent>
        </Dialog>
    );
};

export default Login;
