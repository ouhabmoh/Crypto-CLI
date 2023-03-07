const inquirer = import('inquirer');
const colors = import('colors');
const KeyManager = import('../lib/KeyManager');
const key = {
    async set(){
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([{
            type : 'input',
            message : 'Enter API Key'.green+ 'https://nomics.com',
            name : "key",
            
        }]);

        const key = KeyManager.setKey(input.key);

        if(key){
            console.log('API Key Set'.blue);
        }
        
    },

    remove(){
        try {
            const keyManager = new KeyManager();
            keyManager.delete();

            
            
        } catch (error) {
            console.log(error);
        }
    },

    show(){
        try {
            const keyManager = new KeyManager();
            const key = keyManager.get();


            
        } catch (error) {
            console.log(error);
        }
    }
}
;


export default key;