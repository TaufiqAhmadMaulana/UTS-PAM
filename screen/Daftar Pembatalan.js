import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Button,
} from 'react-native';
import styles from '../style/stylehome';
import style from '../style/stylehome'

const Pembatalan = ({ navigation }) => {

    return (
        <SafeAreaView style={style.page2view}>
            <View style={style.margin}>
            <Text style={styles.Judul}> Daftar Pembatalan</Text>
                <View style={style.View}>
                    <Text style={style.text}>Pelabuhan Keberangkatan: Pelabuhan Bakauheni</Text>
                    <Text style={style.text}>Pelabuhan Tujuan: Pelabuhan Merak</Text>
                    <Text style={style.text}>Tanggal Keberangkatan: 26 Maret 2022</Text>
                    <Text style={style.text}>Jam Keberangkatan: 12.40 WIB</Text>
                </View>
                <View style={style.back}>
                <Button
                        title="Halaman Awal" 
                        color="green"
                        justifyContent= 'center'
                        onPress={() => navigation.navigate('Beranda')}/>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Pembatalan;