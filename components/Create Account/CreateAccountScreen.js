import React, {useEffect, useRef, useState} from "react";
import {
    Animated,
    Dimensions,
    FlatList,
    Image,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text, TextInput,
    View
} from "react-native";
import {ExpandingDot} from 'react-native-animated-pagination-dots';
import {ThemedButton} from "react-native-really-awesome-button";
import DateTimePicker from '@react-native-community/datetimepicker';
import {Fumi} from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome.js";
import AntDesign from "react-native-vector-icons/AntDesign.js";
import {Dropdown} from 'react-native-element-dropdown';
import * as ImagePicker from "expo-image-picker";

const window = Dimensions.get('window');

export function CreateAccountScreen({route, navigation}){

    const { dataSent } = route.params || {};

    const flatListRef = useRef(null);
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [image, setImage] = useState(null);
    const [imageUri, setUri] = useState("");

    const [nextIndex, setNextIndex] = useState(1);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [username, setUsername] = useState('');
    const [terms, setTerms] = useState(false);
    const [gender, setGender] = useState(null);
    const [savesexualO1, setSaveSexualO1] = useState(0);
    const [savesexualO2, setSaveSexualO2] = useState(0);
    const [saveGender, setSaveGender] = useState(null);
    const [savelookingFor, setSaveLookingFor] = useState(null);
    const [instagram, setInstagram] = useState('');
    const [snapchat, setSnapchat] = useState('');
    const [tiktok, setTiktok] = useState('');
    const [saveCountry, setSaveCountry] = useState(0);
    const [saveState, setSaveState] = useState(0);
    const [saveCity, setSaveCity] = useState(0);
    const [saveInterests, setSaveInterests] = useState('');

    const postData = {
        email: email, // Text
        password: password, // Text
        terms: terms, // Boolean
        birthday: date, // Text
        username: username, // Text
        nickname: nickname, // Text
        gender: saveGender, // Text
        sexuality1: savesexualO1, // Text
        sexuality2: savesexualO2, // Text
        lookingFor: savelookingFor, // Text
        interests: dataSent.interests || "", // Array
        country: saveCountry, // Text
        state: saveState, // Text
        city: saveCity, // Text
        snapchat: snapchat, // Text
        tiktok: tiktok, // Text
        instagram: instagram, // Text
        picture: imageUri, // Text
    };

    useEffect(() => {
        setNavigationData(dataSent);
        fetchCountries();
        fetchLookingFor();
        fetchSexualities();
        fetchGenders();
    }, []);



    const fetchCountries = async () => {
        try {
            const response = await fetch('http://10.52.43.27:8080/country/get');
            const result = await response.json();
            setCountries(result.map(item => ({ id: item.id, name: item.name })));
        } catch (error) {
            console.error('Fehler beim Abrufen der Daten:', error);
        }
    };

    const fetchState = async (id) => {
        try {
            const response = await fetch('http://10.52.43.27:8080/state/' + id);
            const result = await response.json();
            setStates(result.map(item => ({ id: item.id, name: item.name })));
        } catch (error) {
            console.error('Fehler beim Abrufen der Daten:', error);
        }
    };

    const fetchCity = async (id) => {
        try {
            const response = await fetch('http://10.52.43.27:8080/city/' + id);
            const result = await response.json();
            setCities(result.map(item => ({ id: item.id, name: item.name })));
        } catch (error) {
            console.error('Fehler beim Abrufen der Daten:', error);
        }
    };

    const fetchSexualities = async (id) => {
        try {
            const response = await fetch('http://10.52.43.27:8080/sexuality/get');
            const result = await response.json();
            setSexualities(result.map(item => ({ id: item.id, label: item.name })));
        } catch (error) {
            console.error('Fehler beim Abrufen der Daten:', error);
        }
    };

    const fetchLookingFor = async (id) => {
        try {
            const response = await fetch('http://10.52.43.27:8080/lookingfor/get');
            const result = await response.json();
            setLookingFors(result.map(item => ({ id: item.id, label: item.description })));
        } catch (error) {
            console.error('Fehler beim Abrufen der Daten:', error);
        }
    };

    const fetchGenders = async (id) => {
        try {
            const response = await fetch('http://10.52.43.27:8080/genders/get');
            const result = await response.json();
            setGenders(result.map(item => ({ id: item.id, label: item.name })));
        } catch (error) {
            console.error('Fehler beim Abrufen der Daten:', error);
        }
    };


    const setNavigationData = (dataSent) => {
        if (dataSent) {
            setPassword(dataSent.password);
            setEmail(dataSent.email);
            setTerms(dataSent.terms)
        }
    };

    const [isPressed, setIsPressed] = useState(false);
    const [isMalePressed, setIsMalePressed] = useState(false);
    const [isFemalePressed, setIsFemalePressed] = useState(false);
    const [isOthersPressed, setIsOthersPressed] = useState(false);
    const [isSexualO1Selected, setIsSexualO1Selected] = useState(false);
    const [isSexualO2Selected, setIsSexualO2Selected] = useState(false);
    const [isCountrySelected, setIsCountrySelected] = useState(false);
    const [isStateSelected, setIsStateSelected] = useState(false);
    const [isCitySelected, setIsCitySelected] = useState(false);


    const handleButtonPress = () => {
        setIsPressed(true);

    };

    const handleGenderButtonPress = () => {
        if (isFemalePressed === true || isMalePressed === true || isOthersPressed === true) {
            flatListRef.current.scrollToIndex({
                animated: true,
                index: nextIndex,
            })

            setNextIndex(nextIndex +1)
        }

    };

    const handleMaleButtonPress = () => {
        setGender(null)
        setIsMalePressed(!isMalePressed)
        setIsFemalePressed(false)
        setIsOthersPressed(false)
        setSaveGender("male")
    }

    const handleFemaleButtonPress = () => {
        setGender(null)
        setIsOthersPressed(false)
        setIsMalePressed(false)
        setIsFemalePressed(!isFemalePressed)
        setSaveGender("female")

    }

    const handleButtonRelease = () => {
        setIsPressed(false);
    };

    const fetchData = () => {
        console.log('Request Body:', JSON.stringify(postData));

        fetch('http://10.52.43.27:8080/api/v1/user/signup', {
            method: 'POST',
            body: JSON.stringify(postData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('POST request successful:', data);
                navigation.navigate('SwipePage')
            })
            .catch(error => {
                console.log(postData)
                console.error('Error:', error);
            });
    };


    const data = [
        { id: '1', header: 'What\'s your birthday', text: 'Be careful! \n This can not be changed', widgetType: 'birthday'},
        { id: '2', header: 'What\'s your username', text: 'Your friends are waiting!', widgetType: 'username'},
        { id: '3', header: 'What\'s your gender', text: 'Be yourself :)', widgetType:'gender'},
        { id: '4', header: 'What\'s your sexual orientation', text: 'Finding friends is for everyone!', widgetType: 'sexual orientation'},
        { id: '5', header: 'Tell us about yourself!', text: 'Special Talents?', widgetType: 'about yourself'},
        { id: '6', header: 'Where are you from?', text: 'Dapper is for everyone!', widgetType: 'location'},
        { id: '7', header: 'What are your socials?', text: 'This can be changed later on', widgetType: 'socials'},
        { id: '8', header: 'Show your smile!', text: 'A picture to start with', widgetType: 'picture'},
    ];

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const handleNicknameChange = (text) => {
        setNickname(text);
    };
    const handleUsernameChange = (text) => {
        setUsername(text);
    };

    const handleInstagramChange = (text) => {
        setInstagram(text);
    };
    const handleSnapchatChange = (text) => {
        setSnapchat(text);
    };

    const handleTiktokChange = (text) => {
        setTiktok(text);
    };


    const handleButtonClick = () => {
        flatListRef.current.scrollToIndex({
            animated: true,
            index: nextIndex,
        })

        setNextIndex(nextIndex +1)
    };

    const handleMomentumScrollEnd = (event) => {

        const contentOffset = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.floor(contentOffset / window.width);
        setNextIndex(currentIndex + 1);

    };

    const [value, setValue] = useState(null);

    const [sexualO1, setSexualO1] = useState(null);
    const [sexualO2, setSexualO2] = useState(null);
    const [lookingFor, setLookingFor] = useState(null);
    const [country, setCountry] = useState(null);
    const [state, setState] = useState(null);
    const [city, setCity] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [countries, setCountries] = useState([])
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    const [lookingFors, setLookingFors] = useState([])
    const [sexualities, setSexualities] = useState([])
    const [genders, setGenders] = useState([])




    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            allowsEditing: true,
            aspect: [1, 2],
            //Schauen wie hoch handy und wie hoch bild, / die werte und ein vielfaches davon als wert nehmen

        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            setUri(result.assets[0].uri);
        }

    };


    const renderItem = ({ item }) => {
        switch (item.widgetType) {
            case 'birthday':
                return (
                    <View style={styles.itemContainer}>
                        <ThemedButton
                            style={styles.nextButton}
                            name="rick"
                            type="primary"
                            backgroundDarker={"#0000"}
                            backgroundColor={"#ffe5e5"}
                            textColor={"#000"}
                            onPressIn={() => handleButtonPress()}
                            onPressOut={handleButtonRelease}
                            activeOpacity={0.7}
                            onPress={() => handleButtonClick()}>
                            Next
                        </ThemedButton>

                        <Text style={styles.header}>{item.header}</Text>
                        <Text style={styles.text}>{item.text}</Text>

                        <ThemedButton
                            style={styles.birthdayButton}
                            name="rick"
                            type="primary"
                            backgroundDarker={"#0000"}
                            backgroundColor={"#ffe5e5"}
                            textColor={"#000"}
                            onPressIn={() => handleButtonPress()}
                            onPressOut={handleButtonRelease}
                            activeOpacity={0.7}
                            onPress={showDatepicker}>
                            Show Date Picker
                        </ThemedButton>

                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                display={'spinner'}
                                is24Hour={true}
                                onChange={onChange}
                                style={{ top: window.height * 0.1 }}
                            />
                        )}
                    </View>
                );

            case 'username':
                return (
                    <View style={styles.itemContainer}>
                        <ThemedButton
                            style={styles.nextButton}
                            name="rick"
                            type="primary"
                            backgroundDarker={"#0000"}
                            backgroundColor={"#ffe5e5"}
                            textColor={"#000"}
                            onPressIn={() => handleButtonPress()}
                            onPressOut={handleButtonRelease}
                            activeOpacity={0.7}
                            onPress={() => handleButtonClick()}>
                            Next
                        </ThemedButton>

                        <Text style={styles.header}>{item.header}</Text>
                        <Text style={styles.text}>{item.text}</Text>

                        <View style={styles.userinputContainer}>
                            <TextInput
                                style={styles.inputField}
                                onChangeText={handleUsernameChange}
                                placeholder={'Username'}
                            />

                        </View>

                        <View style={styles.nickinputContainer}>
                            <TextInput
                                style={styles.inputField}
                                onChangeText={handleNicknameChange}
                                placeholder={'Nickname'}
                            />

                        </View>
                    </View>
                );

            case 'gender':
                return (
                    <View style={styles.itemContainer}>
                        <ThemedButton
                            style={styles.nextButton}
                            name="rick"
                            type="primary"
                            backgroundDarker={"#0000"}
                            backgroundColor={"#ffe5e5"}
                            textColor={"#000"}
                            onPressIn={() => handleButtonPress()}
                            onPressOut={handleButtonRelease}
                            activeOpacity={0.7}
                            onPress={() => handleGenderButtonPress()}>
                            Next
                        </ThemedButton>

                        <Text style={styles.header}>{item.header}</Text>
                        <Text style={styles.text}>{item.text}</Text>

                        <View style={styles.genderContainer}>
                            <View style={styles.male}>
                            <ThemedButton
                                style={styles.male}
                                name="rick"
                                type="primary"
                                backgroundDarker={"#000"}
                                backgroundColor={isMalePressed ? "#806491" : "#C9D0FF"}
                                textColor={"#000"}
                                onPressIn={() => handleMaleButtonPress()}
                                onPressOut={handleButtonRelease}
                                activeOpacity={0.7}
                                width={window.width*0.4}
                                height={window.height*0.3}
                                onPress={() => console.log("Male")}>
                                <View style={styles.picture}>
                                <Image
                                    source={require('../../assets/images/male.png')} // Pfad zu deinem Bild
                                    style={{ width: window.width*0.32, height: window.height*0.1257}} // Passe die Größe nach Bedarf an
                                />
                                <Text style={{ textAlign: 'center', top: window.height*0.0358,fontFamily: 'Akshar-Light', fontSize: 18  }}>Male</Text>
                                </View>
                            </ThemedButton>
                        </View>

                            <View style={styles.female}>
                            <ThemedButton
                                style={styles.female}
                                name="rick"
                                type="primary"
                                width={window.width*0.4}
                                height={window.height*0.3}
                                backgroundDarker={"#000"}
                                backgroundColor={isFemalePressed ? "#806491" : "#C9D0FF"}
                                textColor={"#000"}
                                onPressIn={() => handleFemaleButtonPress()}
                                onPressOut={handleButtonRelease}
                                activeOpacity={0.7}>
                                <View style={styles.picture}>
                                    <Image
                                        source={require('../../assets/images/female.png')}
                                        style={{ width: window.width*0.20, height: window.height*0.1535}}
                                    />
                                    <Text style={{ textAlign: 'center', top: window.height*0.02045, fontFamily: 'Akshar-Light', fontSize: 18 }}>Female</Text>
                                </View>
                            </ThemedButton>
                            </View>

                        </View>

                        <View style={styles.dropdowncontainer}>
                            <Dropdown
                                style={[styles.dropdown, {backgroundColor: isOthersPressed ? "#806491" : "#C9D0FF" } ]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                containerStyle={styles.inputStyle}
                                itemContainerStyle={styles.itemContainerStyle}
                                itemTextStyle={styles.itemTextStyle}
                                data={genders}
                                maxHeight={300}
                                mode={"modal"}
                                labelField="label"
                                valueField="id"
                                backgroundColor={""}
                                placeholder="Others"
                                activeColor={'#806491'}
                                value={gender}
                                renderRightIcon={() => (
                                    <AntDesign
                                        style={styles.iconDrop}
                                        color={isFocus ? 'blue' : 'black'}
                                        name="arrowdown"
                                        size={22}
                                    />
                                )}
                                onChange={item => {
                                    setIsFemalePressed(false)
                                    setIsMalePressed(false)
                                    setIsOthersPressed(true)
                                    setGender(item.value);
                                    setSaveGender(item.label);
                                }}
                            />
                        </View>

                    </View>
                )

            case 'sexual orientation':
                return (
                    <View style={styles.itemContainer}>
                        <ThemedButton
                            style={styles.nextButton}
                            name="rick"
                            type="primary"
                            backgroundDarker={"#0000"}
                            backgroundColor={"#ffe5e5"}
                            textColor={"#000"}
                            onPressIn={() => handleButtonPress()}
                            onPressOut={handleButtonRelease}
                            activeOpacity={0.7}
                            onPress={() => handleButtonClick()}>
                            Next
                        </ThemedButton>

                        <Text style={styles.header}>{item.header}</Text>
                        <Text style={styles.text}>{item.text}</Text>

                        <View style={styles.dropdowncontainer}>
                            <Dropdown
                                style={[styles.dropdownFir, {backgroundColor: isSexualO1Selected ? "#806491" : "#C9D0FF" } ]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                containerStyle={styles.inputStyle}
                                itemContainerStyle={styles.itemContainerStyle}
                                itemTextStyle={styles.itemTextStyle}
                                data={sexualities}
                                maxHeight={300}
                                mode={"modal"}
                                labelField="label"
                                valueField="id"
                                backgroundColor={""}
                                placeholder="Select your sexuality"
                                activeColor={'#806491'}
                                value={sexualO1}
                                renderRightIcon={() => (
                                    <AntDesign
                                        style={styles.iconDrop}
                                        color={isFocus ? 'blue' : 'black'}
                                        name="arrowdown"
                                        size={22}
                                    />
                                )}
                                onChange={item => {
                                    setSexualO1(item.value)
                                    setSaveSexualO1(item.id)
                                    if (item.label === "Select your sexuality"){
                                        setIsSexualO1Selected(false)
                                    } else{
                                        setIsSexualO1Selected(true)
                                    }
                                }}
                            />
                        </View>

                        <View style={styles.dropdowncontainer}>
                            <Dropdown
                                style={[styles.dropdownSec, {backgroundColor: isSexualO2Selected ? "#806491" : "#C9D0FF" } ]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                containerStyle={styles.inputStyle}
                                itemContainerStyle={styles.itemContainerStyle}
                                itemTextStyle={styles.itemTextStyle}
                                data={sexualities}
                                maxHeight={300}
                                mode={"modal"}
                                labelField="label"
                                valueField="id"
                                backgroundColor={""}
                                placeholder="Select your sexuality"
                                activeColor={'#806491'}
                                value={sexualO2}
                                renderRightIcon={() => (
                                    <AntDesign
                                        style={styles.iconDrop}
                                        color={isFocus ? 'blue' : 'black'}
                                        name="arrowdown"
                                        size={22}
                                    />
                                )}
                                onChange={item => {
                                    setSexualO2(item.value)
                                    setSaveSexualO2(item.id)
                                    console.log(item.value)
                                    if (item.label === "Select your sexuality"){
                                        setIsSexualO2Selected(false)
                                    } else{
                                        setIsSexualO2Selected(true)
                                    }
                                }}
                            />
                        </View>

                    </View>


            );

            case 'about yourself':
                return (
                    <View style={styles.itemContainer}>
                        <ThemedButton
                            style={styles.nextButton}
                            name="rick"
                            type="primary"
                            backgroundDarker={"#0000"}
                            backgroundColor={"#ffe5e5"}
                            textColor={"#000"}
                            onPressIn={() => handleButtonPress()}
                            onPressOut={handleButtonRelease}
                            activeOpacity={0.7}
                            onPress={() => handleButtonClick()}>
                            Next
                        </ThemedButton>

                        <Text style={styles.header}>{item.header}</Text>
                        <Text style={styles.text}>{item.text}</Text>

                        <View style={styles.dropdowncontainer}>
                            <Dropdown
                                style={[styles.dropdownFir, {backgroundColor: isSexualO1Selected ? "#806491" : "#C9D0FF" } ]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                containerStyle={styles.inputStyle}
                                itemContainerStyle={styles.itemContainerStyle}
                                itemTextStyle={styles.itemTextStyle}
                                data={lookingFors}
                                maxHeight={300}
                                mode={"modal"}
                                labelField="label"
                                valueField="id"
                                backgroundColor={""}
                                placeholder="What are you looking for"
                                activeColor={'#806491'}
                                value={lookingFor}
                                renderRightIcon={() => (
                                    <AntDesign
                                        style={styles.iconDrop}
                                        color={isFocus ? 'blue' : 'black'}
                                        name="arrowdown"
                                        size={22}
                                    />
                                )}
                                onChange={item => {
                                    setLookingFor(item.value)
                                    setSaveLookingFor(item.id)
                                }}
                            />
                        </View>

                        <View style={styles.interestsContainer}>
                            <ThemedButton
                                style={styles.interestsButton}
                                name="rick"
                                type="primary"
                                backgroundDarker={"#0000"}
                                backgroundColor={"#C9D0FF"}
                                textColor={"#000"}
                                width={window.width*0.8}
                                height={window.height*0.1}
                                onPressIn={() => handleButtonPress()}
                                onPressOut={handleButtonRelease}
                                activeOpacity={0.7}
                                onPress={() => navigation.navigate("SelectInterests")}
                               >
                                <View style={styles.buttonContent}>
                                    <Text style={styles.pickInterestsText}>Pick some interests</Text>
                                    <AntDesign
                                        style={styles.iconDrop2}
                                        color={isFocus ? 'blue' : 'black'}
                                        name="arrowdown"
                                        size={22}
                                    />
                                </View>
                            </ThemedButton>
                        </View>

                    </View>


                );

            case 'location':
                return (
                    <View style={styles.itemContainer}>
                        <ThemedButton
                            style={styles.nextButton}
                            name="rick"
                            type="primary"
                            backgroundDarker={"#0000"}
                            backgroundColor={"#ffe5e5"}
                            textColor={"#000"}
                            onPressIn={() => handleButtonPress()}
                            onPressOut={handleButtonRelease}
                            activeOpacity={0.7}
                            onPress={() => handleButtonClick()}>
                            Next
                        </ThemedButton>

                        <Text style={styles.header}>{item.header}</Text>
                        <Text style={styles.text}>{item.text}</Text>

                        <View style={styles.countrycontainer}>
                            <Dropdown
                                style={[styles.dropdownFir, {backgroundColor: isCountrySelected ? "#806491" : "#C9D0FF" } ]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                containerStyle={styles.inputStyle}
                                itemContainerStyle={styles.itemContainerStyle}
                                itemTextStyle={styles.itemTextStyle}
                                data={countries}
                                maxHeight={300}
                                mode={"modal"}
                                labelField="name"
                                valueField="id"
                                backgroundColor={""}
                                placeholder="Select your Country"
                                activeColor={'#806491'}
                                value={country}
                                renderRightIcon={() => (
                                    <AntDesign
                                        style={styles.iconDrop}
                                        color={isFocus ? 'blue' : 'black'}
                                        name="arrowdown"
                                        size={22}
                                    />
                                )}
                                onChange={item => {
                                    setCountry(item.id)
                                    setSaveCountry(item.id)
                                    setCities([])
                                    fetchState(item.id)
                                    if (item.name === "Select your Country"){
                                        setIsCountrySelected(false)
                                    } else{
                                        setIsCountrySelected(true)
                                    }
                                }}
                            />
                        </View>

                        <View style={styles.statecontainer}>
                            <Dropdown
                                style={[styles.dropdownFir, {backgroundColor: isStateSelected ? "#806491" : "#C9D0FF" } ]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                containerStyle={styles.inputStyle}
                                itemContainerStyle={styles.itemContainerStyle}
                                itemTextStyle={styles.itemTextStyle}
                                data={states}
                                maxHeight={300}
                                mode={"modal"}
                                labelField="name"
                                valueField="id"
                                backgroundColor={""}
                                placeholder="Select your State"
                                activeColor={'#806491'}
                                value={state}
                                renderRightIcon={() => (
                                    <AntDesign
                                        style={styles.iconDrop}
                                        color={isFocus ? 'blue' : 'black'}
                                        name="arrowdown"
                                        size={22}
                                    />
                                )}
                                onChange={item => {
                                    setState(item.id)
                                    setSaveState(item.id)
                                    fetchCity(item.id)
                                    if (item.name === "Select your State"){
                                        setIsStateSelected(false)
                                    } else{
                                        setIsStateSelected(true)
                                    }
                                }}
                            />
                        </View>

                        <View style={styles.citycontainer}>
                            <Dropdown
                                style={[styles.dropdownFir, {backgroundColor: isCitySelected ? "#806491" : "#C9D0FF" } ]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                containerStyle={styles.inputStyle}
                                itemContainerStyle={styles.itemContainerStyle}
                                itemTextStyle={styles.itemTextStyle}
                                data={cities}
                                maxHeight={300}
                                mode={"modal"}
                                labelField="name"
                                valueField="id"
                                backgroundColor={""}
                                placeholder="Select your City"
                                activeColor={'#806491'}
                                value={city}
                                renderRightIcon={() => (
                                    <AntDesign
                                        style={styles.iconDrop}
                                        color={isFocus ? 'blue' : 'black'}
                                        name="arrowdown"
                                        size={22}
                                    />
                                )}
                                onChange={item => {
                                    setCity(item.id)
                                    setSaveCity(item.id)
                                    if (item.name === "Select your City"){
                                        setIsCitySelected(false)
                                    } else{
                                        setIsCitySelected(true)
                                    }
                                }}
                            />
                        </View>

                    </View>


                );

            case 'socials':
                return (
                    <View style={styles.itemContainer}>
                        <ThemedButton
                            style={styles.nextButton}
                            name="rick"
                            type="primary"
                            backgroundDarker={"#0000"}
                            backgroundColor={"#ffe5e5"}
                            textColor={"#000"}
                            onPressIn={() => handleButtonPress()}
                            onPressOut={handleButtonRelease}
                            activeOpacity={0.7}
                            onPress={() => handleButtonClick()}>
                            Next
                        </ThemedButton>

                        <Text style={styles.header}>{item.header}</Text>
                        <Text style={styles.text}>{item.text}</Text>


                        <View style={styles.snapchatInputContainer}>
                            <TextInput
                                style={styles.inputField}
                                onChangeText={handleSnapchatChange}
                                placeholder={'Snapchat'}
                            />

                        </View>
                        <View style={styles.tiktokInputContainer}>
                            <TextInput
                                style={styles.inputField}
                                onChangeText={handleTiktokChange}
                                placeholder={'Tiktok'}
                            />

                        </View>
                        <View style={styles.instagramInputContainer}>
                            <TextInput
                                style={styles.inputField}
                                onChangeText={handleInstagramChange}
                                placeholder={'Instagram'}
                            />

                        </View>

                    </View>


                );

            case 'picture':
                return (
                    <View style={styles.itemContainer}>
                        <ThemedButton
                            style={styles.nextButton}
                            name="rick"
                            type="primary"
                            backgroundDarker={"#0000"}
                            backgroundColor={"#ffe5e5"}
                            textColor={"#000"}
                            onPressIn={() => handleButtonPress()}
                            onPressOut={handleButtonRelease}
                            activeOpacity={0.7}
                            onPress={() => fetchData()}>
                            Finish
                        </ThemedButton>

                        <Text style={styles.headerImage}>{item.header}</Text>
                        <Text style={styles.textImage}>{item.text}</Text>

                        <View style={styles.imageViewStyle}>
                            <ThemedButton
                                style={styles.pickImageButtonStyle}
                                name="rick"
                                type="primary"
                                backgroundDarker={"#0000"}
                                backgroundColor={"#fff"}
                                width={window.width * 0.48}
                                height={window.height * 0.489}
                                textColor={"#000"}
                                onPressIn={() => handleButtonPress()}
                                onPressOut={handleButtonRelease}
                                activeOpacity={0.7}
                                onPress={() => pickImage()}
                            >
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    {image ? (
                                        <Image
                                            source={{ uri: image }}
                                            style={{ width: window.width*0.48046875, height: window.height*0.4883823533002811 }}
                                        />
                                    ) : (
                                        <Text style={styles.pickImageTextStyle}>Upload Image</Text>
                                    )}
                                </View>
                            </ThemedButton>
                        </View>

                            <Image source={require('../../assets/images/guywithpistole_imageselection.png')} style={styles.guyimage} />
                            <Image source={require('../../assets/images/dog.png')} style={styles.dogimage} />

                    </View>
                );


            default:
                return null;
        }
    };


    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >

                    <View style={styles.flatlist}>
                        <FlatList
                            ref={flatListRef}
                            data={data}
                            renderItem={renderItem}
                            onMomentumScrollEnd={handleMomentumScrollEnd}
                            onScroll={Animated.event(
                                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                                {
                                    useNativeDriver: false
                                }
                            )}
                            keyExtractor={(item) => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            pagingEnabled={true}
                        />
                    </View>

            <View>
                    <ExpandingDot
                        data={data}
                        marginHorizontal={3}
                        expandingDotWidth={50}
                        scrollX={scrollX}
                        inActiveDotColor={"#FFF"}
                        inActiveDotOpacity={0.4}
                        activeDotColor={"#FFF"}

                        dotStyle={{
                            backgroundColor: '#FFF',
                            opacity: 0.4,
                            width: window.width*0.078125,
                            color: '#FFF'
                        }}
                        containerStyle={{
                            position: "absolute",
                            bottom: window.height*0.8867,
                            flexDirection: "row",
                            alignSelf: "center"
                        }}

                        slidingIndicatorStyle={{
                            backgroundColor: '#806491',
                            zIndex: 99,
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignSelf: 'center'
                        }}

                    />
            </View>
        </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#C9D0FF",
        justifyContent: "center",
    },
    linearGradient: {
        width: '100%',
        height: '100%',
        opacity: 0.95,
        justifyContent: 'center',
    },

    buttonParent: {
        height: window.height*0.08,
        width: window.width*0.5,
        borderRadius: 10,
        top: window.height*0.64,
        alignSelf: 'center',
        justifyContent: 'center',
    },

    birthdayButton: {
        borderRadius: 10,
        top: window.height*0.09,
        alignSelf: 'center',
        justifyContent: 'center',
    },

    nextButton: {
        borderRadius: 10,
        top: window.height*0.65,
        alignSelf: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        color: 'white',
        fontSize: 14,
        alignSelf: 'center',
    },

    pressedButton: {
        opacity: 0.5,
    },

    itemContainer: {
        width: window.width,
        height: window.height*0.90,
        alignSelf: "center",
        borderRadius: 50,
        backgroundColor: "#171C3D",
        top: window.height*0.132353,
    },

    image: {
        width: window.width*0.80,
        height: window.height*0.43,
        alignSelf: "center",
    },
    header: {
        fontSize: 28,
        top: window.height*0.0132353,
        fontWeight: 'bold',
        alignSelf: "center",
        textAlign: "center",
        textAlignVertical: "center",
        color: "white",
        fontFamily: 'Akshar-Light'
    },
    text: {
        fontSize: 18,
        top: window.width*0.0264,
        alignSelf: "center",
        textAlign: "center",
        textAlignVertical: "center",
        color: "white",
        fontFamily: 'AbhayaLibre-SemiBold',
        width: window.width * 0.8
    },

    flatlist: {
        height: window.height,
        top: 15,
    },

    dots: {
        height: window.height*0.0397,
        width: window.width*0.2604167,
        bottom: window.height*0.1985,
        alignSelf: "center",
        backgroundColor: "red"
    },
    rectangle: {
        width: window.width*0.95,
        alignSelf: "center",
        height: window.height*0.7,
        top: window.height*0.6,
        borderRadius: 50,
        backgroundColor: "red",
    },
    birthdaybutton: {
        height: window.height*0.08,
        width: window.width*0.5,
        borderRadius: 10,
        top: window.height*0.67,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    userinputContainer: {
        height: window.height*0.1059,
        width: window.width*0.9,
        alignSelf: "center",
        top: window.height*0.11,
    },

    nickinputContainer: {
        height: window.height*0.1059,
        width: window.width*0.9,
        alignSelf: "center",
        top: window.height*0.16,
    },
    inputField: {
        borderRadius: 30,
        padding: 20,
        backgroundColor: "white"
    },

    genderContainer: {
        height: window.height*0.30,
        top: window.height*0.05,
        width: window.width,
        flexDirection: "row",
        alignContent: "center",
    },

    female: {
        width: window.width * 0.3,
        height: window.height * 0.3,
        borderRadius: 10,
        alignSelf: "flex-end", // Änderung zu flex-end, um es ganz rechts auszurichten
        justifyContent: "flex-end",
        marginLeft: window.width * 0.195, // Hier wird marginRight verwendet, um den Abstand zu steuern
    },

    male: {
        width: window.width * 0.3,
        height: window.height * 0.3,
        borderRadius: 10,
        alignSelf: "flex-start", // Änderung zu flex-start, um es ganz links auszurichten
        justifyContent: "flex-start",
        marginLeft: window.width * 0.035, // Hier wird marginLeft verwendet, um den Abstand zu steuern
    },

    dropdowncontainer: {
        top: window.height*0.02,
        height: window.height*0.2,
    },

    dropdown: {
        top: window.height*0.055,
        width: window.width*0.9,
        alignSelf: "center",
        height: window.height*0.075,
        borderRadius: 50,
        paddingLeft: 30,
        textAlignVertical: "center",
        fontSize: 20,
        fontFamily: "Akshar-Light"
    },

    dropdownSec: {
        top: window.height*0.025,
        width: window.width*0.9,
        alignSelf: "center",
        height: window.height*0.075,
        borderRadius: 50,
        paddingLeft: 30,
        textAlignVertical: "center",
        fontSize: 20,
        fontFamily: "Akshar-Light"
    },

    dropdownFir: {
        top: window.height*0.065,
        width: window.width*0.9,
        alignSelf: "center",
        height: window.height*0.075,
        borderRadius: 50,
        paddingLeft: 30,
        textAlignVertical: "center",
        fontSize: 20,
        fontFamily: "Akshar-Light"
    },

    placeholderStyle: {
        fontFamily: "Akshar-Light",
    },

    selectedTextStyle: {
        fontFamily: "Akshar-Light"
    },
    inputSearchStyle: {
        borderRadius: 50,
        height: 40,
        fontSize: 16,
    },
    inputStyle:{
        backgroundColor: "#C9D0FF",
        borderRadius: 30,
        width: window.width*0.9,
        height: window.height*0.6,
    },
    itemContainerStyle:{
        borderRadius: 50,
        left: 20,
        width: window.width*0.8
    },
    itemTextStyle:{
        width: window.width*0.4,
    },

    iconDrop: {
        paddingRight: 10
    },

    interestsContainer: {
        height: window.height*0.10,
        width: window.width*0.8,
        alignSelf: "center",
    },

    interestsButton: {
        borderRadius: 10,
        top: window.height*0.07,
        width: window.width*0.8,
        height: window.height*0.1,
        alignSelf: 'center',
        justifyContent: 'center',
    },

    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pickInterestsText: {
        fontFamily: "Akshar-Medium",
        fontSize: 15,
        left: window.width*0.025,
        // Stile für den Text anpassen
    },
    iconDrop2: {// Abstand zwischen Text und Icon anpassen
        left: window.width*0.18,
    },
    countrycontainer: {
        top: window.height*0.02,
        height: window.height*0.2,
    },
    statecontainer: {
        bottom: window.height*0.06,
        height: window.height*0.2,
    },
    citycontainer: {
        bottom: window.height*0.14,
        height: window.height*0.2,
    },
    snapchatInputContainer: {
        height: window.height*0.1059,
        width: window.width*0.9,
        alignSelf: "center",
        top: window.height*0.07,
    },
    tiktokInputContainer: {
        height: window.height*0.1059,
        width: window.width*0.9,
        alignSelf: "center",
        top: window.height*0.090,
    },
    instagramInputContainer: {
        height: window.height*0.1059,
        width: window.width*0.9,
        alignSelf: "center",
        top: window.height*0.11,
    },
    guyimage: {
        height: window.height*0.10,
        width:window.width*0.2,
        bottom: window.height*0.12,
        alignSelf: "center",
        right: window.width*0.16,
    },
    dogimage: {
        height: window.height*0.10,
        width:window.width*0.2,
        bottom: window.height*0.21,
        alignSelf: "center",
        left: window.width*0.15,
    },
    imageViewStyle: {
        alignSelf: "center",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    pickImageButtonStyle: {
        borderRadius: 10,
        bottom: window.height*0.02,
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent:"center",
        alignItems: "center"
    },
    pickImageTextStyle: {
        fontFamily: "Poppins-Regular",
        color: "#959AA1",
        fontSize: 18
    },
    headerImage: {
        fontSize: 28,
        bottom: window.height*0.0418353,
        fontWeight: 'bold',
        alignSelf: "center",
        textAlign: "center",
        textAlignVertical: "center",
        color: "white",
        fontFamily: 'Akshar-Light'
    },
    textImage: {
        fontSize: 18,
        bottom: window.width*0.0704,
        alignSelf: "center",
        textAlign: "center",
        textAlignVertical: "center",
        color: "white",
        fontFamily: 'AbhayaLibre-SemiBold',
        width: window.width * 0.8
    },
    nextButtonImage: {
        borderRadius: 10,
        top: window.height*0.7,
        alignSelf: 'center',
        justifyContent: 'center',
    }


});