import  AsyncStorage from "@react-native-community/async-storage";

const setValue = async (name, data) => {
    try{
        const item = await AsyncStorage.setItem(name, JSON.stringify(data));
        return item;
    }catch(error){
        throw error;   
    }
}

const getValue = async (name) => {
    try{
        const item = await AsyncStorage.getItem(name);
        if(item !== null){
            return JSON.parse(item);;
        }else{
            return null;
        }
    }catch(error){
        throw error;  
    } 
}

const deleteValue = async (name) => {
    try {
        await AsyncStorage.removeItem(name);
        return true;
    }
    catch(exception) {
        return false;
    }
}

export default { setValue, getValue, deleteValue }