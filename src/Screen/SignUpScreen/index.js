import { react, useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import User from '../../assert/user.png';
import style from './style';
import * as yup from 'yup'
import { Formik } from 'formik'

const SignUp = ({ navigation }) => {
    const loginValidationSchema = yup.object().shape({
        name: yup
            .string()
            .required('name is Required'),
        email: yup
            .string()
            .email("Please enter valid email")
            .required('Email Address is Required'),

        phone: yup
            .string()
            .min(10, ({ min }) => `phone must be at least ${min} characters`)
            .required('phone is required'),
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
                    Register
                </Text>
            </View>

            <Formik
                validationSchema={loginValidationSchema}
                initialValues={{ name: '', email: '', phone: '', password: '' }}
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
                            name="name"
                            placeholder="name"
                            style={style.textInput}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                            keyboardType="name"
                        />
                        {errors.name &&
                            <Text style={{ fontSize: 10, color: 'red' }}>{errors.name}</Text>
                        }
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
                            name="phone"
                            placeholder="phone"
                            style={style.textInput}
                            onChangeText={handleChange('phone')}
                            onBlur={handleBlur('phone')}
                            value={values.phone}
                            keyboardType="numeric"

                        />
                        {errors.phone &&
                            <Text style={{ fontSize: 10, color: 'red' }}>{errors.phone}</Text>
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
                        <View style={style.buttonView}>
                            <Button
                                onPress={handleSubmit}
                                title="Sign Up"
                                disabled={!isValid}
                            />
                        </View>
                        <TouchableOpacity>
                            <View style={style.textView}>
                                <Text style={style.text}>
                                    have an account?

                                    <Text style={style.textS}
                                        onPress={() => navigation.navigate('Login')}>
                                        Login
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

export default SignUp;