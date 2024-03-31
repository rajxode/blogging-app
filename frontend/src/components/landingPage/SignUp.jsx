
import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useDispatch } from 'react-redux';
import { createUserThunk } from "@/reducers/authReducer";
import { toast } from 'react-toastify';

const SignUp = () => {

    const dispatch = useDispatch();

    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:''
    });


    const handleSubmit = async(e) => {
        try {
            e.preventDefault();
            const result = await dispatch(createUserThunk(formData));
            if(result.payload.success){
                toast.success('User created, Please Login to Continue');
            }
            else{
                toast.error(result.payload.message);
            }
            setFormData({
                name:'',
                email:'',
                password:''
            });
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <Card>
            <CardHeader>
            <CardTitle>Sign up</CardTitle>
            <CardDescription>
                Create new account with your email address
            </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
            <CardContent className="space-y-2">
            <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input 
                    id="name" 
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData,name:e.target.value})} />
            </div>
            <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input 
                    id="email" 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData,email:e.target.value})} />
            </div>
            <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input 
                    id="password" 
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData,password:e.target.value})} />
            </div>
            </CardContent>
            <CardFooter>
            <Button type="submit" onClick={handleSubmit}>Create Account</Button>
            </CardFooter>
            </form>
        </Card>
    )
}

export default SignUp;