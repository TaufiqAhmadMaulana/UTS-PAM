import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TextInput,
    ScrollView,
    Button,
} from 'react-native';
import styles from '../style/stylehome';
import Icon from 'react-native-vector-icons/FontAwesome';

const Beranda = ({ navigation }) => {

    const [Awal, onChangeAwal] = React.useState('');
    const [Tujuan, onChangeTujuan] = React.useState('');
    const [Tanggal, onChangeTanggal] = React.useState('');
    const [Jam, onChangeJam] = React.useState('');

    return (
        <SafeAreaView >
            <ScrollView>
                <View style={styles.centerView}>
                    <Text style={styles.Judul}>KAPALZY</Text>
                    <View style={styles.box}>
                        <View style={styles.margins}>
                            <Text style={styles.pilihan}>Pelabuhan Awal</Text>
                            <Icon name="ship" size={20} />
                            <TextInput
                                style={styles.Input}
                                onChangeText={(text) => onChangeAwal(text)}
                                value={Awal}
                                placeholder="Pilih Pelabuhan Awal..." />
                            <Text style={styles.pilihan}>Pelabuhan Tujuan</Text>
                            <Icon name='ship' size={20} />
                            <TextInput
                                style={styles.Input}
                                onChangeText={(text) => onChangeTujuan(text)}
                                value={Tujuan}
                                placeholder="Pilih Pelabuhan Tujuan..." />
                            <Text style={styles.pilihan}>Waktu Keberangkatan</Text>
                            <Icon name='calendar' size={20} />
                            <TextInput
                                style={styles.Input}
                                onChangeText={(text) => onChangeTanggal(text)}
                                value={Tanggal}
                                placeholder="Pilih Tanggal Keberangkatan..." />
                            <Text style={styles.pilihan}>Jam Keberangkatan</Text>
                            <Icon name='clock-o' size={20} />
                            <TextInput
                                style={styles.Input}
                                onChangeText={(text) => onChangeJam(text)}
                                value={Jam}
                                placeholder="Pilih Jam Masuk..." />
                            <Button
                                title="Pesan Tiket"
                                color= "orange"
                                onPress={() => navigation.navigate('Page2')}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default Beranda;