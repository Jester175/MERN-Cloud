import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

class fileServices {
    createDir(file) {
        const filePath = `${process.env.FILE_PATH}\\${file.user}\\${file.path}`
        return new Promise((res, rej) => {
            try {
                if(!fs.existsSync(filePath)){
                    fs.mkdirSync(filePath);
                    return res({message: 'File was created'})
                }else {
                    return rej({message: 'File already exist'})
                }
            } catch (error) {
                return rej({message: 'File error'})
            }
        })
    }
}


export default new fileServices();