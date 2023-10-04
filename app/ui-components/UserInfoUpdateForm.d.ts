/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UserInfo } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserInfoUpdateFormInputValues = {
    firstname?: string;
    lastname?: string;
    email?: string;
    phonenumber?: string;
    age?: number;
};
export declare type UserInfoUpdateFormValidationValues = {
    firstname?: ValidationFunction<string>;
    lastname?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phonenumber?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserInfoUpdateFormOverridesProps = {
    UserInfoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstname?: PrimitiveOverrideProps<TextFieldProps>;
    lastname?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phonenumber?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserInfoUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserInfoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userInfo?: UserInfo;
    onSubmit?: (fields: UserInfoUpdateFormInputValues) => UserInfoUpdateFormInputValues;
    onSuccess?: (fields: UserInfoUpdateFormInputValues) => void;
    onError?: (fields: UserInfoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserInfoUpdateFormInputValues) => UserInfoUpdateFormInputValues;
    onValidate?: UserInfoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserInfoUpdateForm(props: UserInfoUpdateFormProps): React.ReactElement;
