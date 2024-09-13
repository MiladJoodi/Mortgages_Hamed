"use client"
import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

type TitleProps = {
    title: string
  }
  
  function SubmitButton({title}:TitleProps) {
  
    const {pending} = useFormStatus();
  
    return (
        <Button type="submit" disabled={pending}>
        {pending ? 'Adding...' : 'Add'}
      </Button>
    )
  }


export default SubmitButton;
