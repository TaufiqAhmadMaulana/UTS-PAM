import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Button,
} from 'react-native';
import styles from '../style/stylehome';
import style from '../style/stylehome'

const Pembayaran = ({ navigation }) => {

    return (
        <SafeAreaView style={style.page2view}>
            <View style={style.margin}>
            <Text style={styles.Judul}> Pembayaran Tiket</Text>
                <View style={style.View}>
                    <Text style={style.text}>TRANSFER KE NOMOR REKENING 0815XXXXXXX</Text>
                    <Text style={style.text}>------------------------------</Text>
                    <Text style={style.text}>BANK ABC</Text>
                </View>
                <View style={style.back}>
                <Button
                        title="Selesai" 
                        color="orange"
                        justifyContent= 'center'
                        onPress={() => navigation.navigate('Beranda')}/>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Pembayaran;