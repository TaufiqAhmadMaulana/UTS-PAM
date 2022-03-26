import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Button,
} from 'react-native';
import style from '../style/stylehome'

const Page2 = ({ navigation }) => {

    return (
        <SafeAreaView style={style.page2view}>
            <View style={style.margin}>
                <View style={style.View}>
                    <Text style={style.text}>Pelabuhan Keberangkatan: Pelabuhan Bakauheni</Text>
                    <Text style={style.text}>Pelabuhan Tujuan: Pelabuhan Merak</Text>
                    <Text style={style.text}>Tanggal Keberangkatan: 26 Maret 2022</Text>
                    <Text style={style.text}>Jam Keberangkatan: 12.40 WIB</Text>
                </View>
                <View style={style.marginbutton}>
                <Button 
                        title="Batalkan Pesanan" 
                        color="green"
                        onPress={() => navigation.navigate('Pembatalan')}
                />
                <Button
                        title="Bayar Tiket" 
                        color="orange"
                        onPress={() => navigation.navigate('Pembayaran')}/>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Page2;