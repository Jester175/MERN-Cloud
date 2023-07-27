export const email = {
    required: "Email is required",
    pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
    },
}

export const username = {
    required: 'Username is required',
    pattern: {
        value: /^[A-Za-z\d]{2,10}$/,
        message: 'Invalid username',
    },
}

export const password = {
    required: 'Password is required',
    pattern: {
        value: /^[A-Za-z\d]{3,10}$/,
        message: 'Invalid password',
    }
}