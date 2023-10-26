import {PayWithFlutterwave} from 'flutterwave-react-native';
import{Text,View,StatusBar} from 'react-native';


// or import PayWithFlutterwave from 'flutterwave-react-native';

const Money = ({navigation}) => {
    const makeid = (length) => {
        let result = "";
        const characters = 
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i += 1) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }
        return result;
    };
    const handleRedirect = ({ status, transaction_id, tx_ref }) => {
        // You can store these values in a database
        console.log(
            `Status: ${status}\n ID: ${transaction_id}\n Ref: ${tx_ref}`
        );
    };

    const handleIntializeError = ({ code, message, errorId, errors }) => {
        // You can use these for debugging
        Toast.show("Payment could not be initialized");
        console.log(
            "Code: %s\nMessage: %s\nID: %s\nErrors: %O",
            code,
            message,
            errorId,
            errors
        );
    };

    const handleWillInitialize = () => {
        Toast.show("Payment initializing...");
    };

    const handleDidInitialize = () => {
        Toast.show("Payment initialized...");
    };

    const handleOnAbort = () => {
        Toast.show("Payment cancelled...");
    };

    return (
        <>
            <StatusBar translucent={false} barStyle="light-content"/>
            <View style={{marginTop:50}}>
                <PayWithFlutterwave
                    onRedirect={handleRedirect}
                    onInitializeError={handleIntializeError}
                    onWillInitialize={handleWillInitialize}
                    onDidInitialize={handleDidInitialize}
                    onAbort={handleOnAbort}
                    options={{
                        tx_ref: makeid(10),
                        authorization:
                        "FLWPUBK-d50a6bd2bfaf10d0e6773199605d1c8a-X",
                        customer: {
                            email:'bbosalj@gmail.com'
                            //name,
                            //phonenumber,
                        },
                        amount:50000,
                        currency:'UGX',
                        payment_options:"mobilemoneyuganda"
                    }}
                />
            </View>
        </>
        
    )
}

export default Money;