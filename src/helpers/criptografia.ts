import bcrypt from 'bcryptjs';



export const generateHash = (plainTextPassword: string) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(plainTextPassword, salt);
}

export const compareHash = (plainTextPassword:string, hashedPassword: string) => {
    console.log('plain: ', plainTextPassword);
    console.log('hash', hashedPassword)
    return bcrypt.compareSync(plainTextPassword, hashedPassword);
}