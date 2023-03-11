/**
 *
 * Login
 *
 */
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Alert, Button } from 'antd';
import styled from 'styled-components/macro';

import { useLoginSlice } from 'app/pages/Login';
interface Props {}

export const Login = memo((props: Props) => {
  const { actions } = useLoginSlice();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => dispatch(actions.login(data));

  return (
    <Div>
      <main className="login">
        <div className="main-login">
          <div className="top">
            <br />
            <br />
            <br />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign Sign On.</h1>
            <p className="pp">😊Login Id</p>
            <input
              className="usr put"
              placeholder="please enter here..."
              type="text"
              {...register('userId', { required: true })}
            />
            <br />
            {errors.userId && (
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 'row',
                }}
              >
                <Alert message="Error Text" type="error" showIcon />
              </div>
            )}
            <br />
            <Button type="primary" onClick={handleSubmit(onSubmit)}>
              Submit
            </Button>
          </form>
        </div>
        <div className="banner">
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="contain">
            <h1>Welcome Back!</h1>
            <h4>
              We are happy to have you back, please sign back in to continue
            </h4>
            <div className="lines">
              <div className="line"></div>
              <p className="p-b">or</p>
              <div className="line"></div>
            </div>
            <p className="pp">
              Dont have an account don't worry. Let get connect 😊
            </p>
          </div>
        </div>
      </main>
    </Div>
  );
});

const Div = styled.div``;
