interface Data {
    ID: number;
    [key: string]: any;
    }
    
    const findMaxID = (dataArray: Array<Data>): number => {
        let maxID = 0;
        for (let i = 0; i < dataArray.length; i++) {
        const data: Data = dataArray[i];
        if (data.ID > maxID) {
            maxID = data.ID;
        }
        }
        return maxID;
    };
    
    export default findMaxID;  