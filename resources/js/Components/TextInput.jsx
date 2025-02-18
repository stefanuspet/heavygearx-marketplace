import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={
                'block w-full rounded-lg border border-[#E0E0E0] bg-gray-50 p-2.5 text-gray-900 focus:border-buttonPrimary focus:ring-buttonPrimary sm:text-sm' +
                className
            }
            ref={localRef}
        />
    );
});
