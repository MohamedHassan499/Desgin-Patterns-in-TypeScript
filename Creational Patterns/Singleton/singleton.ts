class DatabaseConnect {

    private static _instance: DatabaseConnect | null;
    private userName: string | null;
    private password: string | null; 
    private constructor (userName: string, password: string){
        this.userName = userName;
        this.password = password;
    }

    public static createConnection(userName: string, password: string): DatabaseConnect{
        if(!this._instance){
            this._instance = new DatabaseConnect(userName, password);
        }
        return this._instance;
    }

    public checkEquality(otherConnection: DatabaseConnect): boolean {
        return DatabaseConnect._instance === otherConnection;
    }
}

// Driver code

const firstConnection = DatabaseConnect.createConnection('localhost', '3000');
const secondConnection = DatabaseConnect.createConnection('temp_user', '1234');

console.log(firstConnection.checkEquality(secondConnection)); // true