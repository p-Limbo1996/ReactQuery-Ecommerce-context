// import { useRef, useState, type ComponentProps } from "react";

// type TButton = ComponentProps<"button"> & {
//   title: string;
// };

// type user1 = {
//   name: string;
//   age: number;
// };
// type user2 = user1 & { gender: "man" | "woman" };
// type user3 = Omit<user2,"gender" | "age" >

// const Button = ({ title, type, onClick, disabled }: TButton) => {
//   const btnRef = useRef<HTMLButtonElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);

// const[formData,setFormData]=useState<user3>()


//   return (
//     <>
//       <button
//         ref={btnRef}
//         onClick={onClick}
//         type={type}
//         disabled={disabled}
//         className=""
//       >

        
//         {title}
//       </button>

//       <input ref={inputRef} type="text" />
//     </>
//   );
// };

// export default Button;
