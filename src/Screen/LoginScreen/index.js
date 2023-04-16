import { react, useState } from 'react';
import { View, Text, Image, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import User from '../../assert/user.png';
import Google from '../../assert/google.png';
import Fb from '../../assert/fb.png';
import style from './style';
import * as yup from 'yup'
import { Formik } from 'formik'

const Login = ({ navigation }) => {
    const loginValidationSchema = yup.object().shape({
        email: yup
            .string()
            .email("Please enter valid email")
            .required('Email Address is Required'),
        password: yup
            .string()
            .min(6, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
    })

    return (
        <View style={style.container}>
            <View>
                <Image source={User} style={style.logo} />
            </View>
            <View style={style.headingView}>
                <Text style={style.headingText}>
                    Login
                </Text>
            </View>

            <Formik
                validationSchema={loginValidationSchema}
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    isValid,
                }) => (
                    <>
                        <TextInput
                            name="email"
                            placeholder="Email Address"
                            style={style.textInput}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                        />
                        {errors.email &&
                            <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                        }
                        <TextInput
                            name="password"
                            placeholder="Password"
                            style={style.textInput}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry
                        />
                        {errors.password &&
                            <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
                        }

                        <View style={style.iconView}>
                            <Image source={Google} style={style.iconS} />
                            <Image source={Fb} style={style.iconS} />
                        </View>
                        <View style={style.buttonView}>
                            <Button
                                onPress={handleSubmit}
                                title="Login"
                                disabled={!isValid}
                            />
                        </View>
                        <TouchableOpacity>
                            <View style={style.textView}>
                                <Text style={style.text}>
                                    Don’t have an account?

                                    <Text style={style.textS}
                                        onPress={() => navigation.navigate('SignUp')}>
                                        Sign Up
                                    </Text>
                                </Text>

                            </View>
                        </TouchableOpacity>
                    </>
                )}

            </Formik>

        </View>

    )
}

export default Login;