const Configstore = import('configstore');
const pkg = import('../package.json');


class KeyManager{
    constructor(){
        this.conf = new Configstore(pkg.name);

    }

    setKey(key){
        this.conf.set('apiKey', key);
        return key;
    }

    getKey(){
        const key = this.conf.get('apiKey');
        if(!key){
            throw new Error("No API Key Found - get a key att https://nomics.com");
        }

        return key;
    }

    deleteKey(){
        const key = this.conf.get('apiKey');
        if(!key){
            throw new Error("No API Key Found - get a key att https://nomics.com");
        }

        this.conf.delete('apiKey');

        return key;
    }


}

export default KeyManager;