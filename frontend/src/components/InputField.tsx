import { DetailedHTMLProps, ForwardedRef, forwardRef, HtmlHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface InputFieldProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type?: string,
  name: string,
  id: string,
  error?: FieldError,
  placeholder: string,
}

export const InputField = forwardRef(({ type = "text", name, id, error, placeholder, className, ...props }: InputFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div className={className}>
      <input
        type={type}
        id={id}
        name={name}
        className="block p-2 border outline-cyan-500 rounded-sm w-full focus:border-red-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50"
        placeholder={placeholder}
        {...props}
        ref={ref}
      />
      {error && <p className="mt-1 text-sm text-red-500">This is a error message.</p>}
    </div>
  );
});