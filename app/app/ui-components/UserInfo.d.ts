/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserInfoInputValues = {
    firstname?: string;
    lastname?: string;
    email?: string;
    phonenumber?: string;
    age?: number;
};
export declare type UserInfoValidationValues = {
    firstname?: ValidationFunction<string>;
    lastname?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phonenumber?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserInfoOverridesProps = {
    UserInfoGrid?: PrimitiveOverrideProps<GridProps>;
    firstname?: PrimitiveOverrideProps<TextFieldProps>;
    lastname?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phonenumber?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserInfoProps = React.PropsWithChildren<{
    overrides?: UserInfoOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserInfoInputValues) => UserInfoInputValues;
    onSuccess?: (fields: UserInfoInputValues) => void;
    onError?: (fields: UserInfoInputValues, errorMessage: string) => void;
    onChange?: (fields: UserInfoInputValues) => UserInfoInputValues;
    onValidate?: UserInfoValidationValues;
} & React.CSSProperties>;
export default function UserInfo(props: UserInfoProps): React.ReactElement;
