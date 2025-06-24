import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";

import { useLogin } from "@/hooks/useLogin";
import Google from "@/components/ui/Google";
import Facebook from "@/components/ui/Facebook";

type FormData = {
    username: string;
    password: string;
};

const LogIn: React.FC = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const navigate = useNavigate();

    const { mutate, isPending, isError, error } = useLogin();

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        mutate(data, {
            onSuccess: () => {
                navigate("/");
            },
            onError: (err) => {
                console.error("Login failed", err);
            },
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("username", { required: true })} />

            <input
                {...register("password", {
                    required: "Password",
                })}
            />

            <Button type="submit" disabled={isPending}>
                {isPending ? "Logging in..." : "Login"}
            </Button>

            <Google />
            <Facebook />

            {isError && (
                <p className="text-red-500">
                    Error logging in. {error.message}
                </p>
            )}
        </form>
    );
};

export default LogIn;
