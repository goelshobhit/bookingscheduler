/**
 *
 * UserDashboard
 *
 */
import React, { memo, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { Skeleton, Avatar, List, Space, Card } from 'antd';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { useUserDashboardSlice } from 'app/pages/UserDashboard';
import {
  selectUserData,
  selectUserLoading,
} from 'app/pages/UserDashboard/selectors';

import { CreateJob } from './createJob';
interface Props {
  isLoggedInfo?: any;
}

export const UserDashboard = memo(({ isLoggedInfo }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { actions } = useUserDashboardSlice();
  const data = useSelector(selectUserData);
  const loading = useSelector(selectUserLoading);

  const { Meta } = Card;

  useEffect(() => {
    dispatch(actions.getUserInfo(isLoggedInfo?._id));
  }, [isLoggedInfo, dispatch, actions]);

  const createUserJob = useCallback(
    data => {
      dispatch(actions.createJob(data));
    },
    [dispatch, actions],
  );

  if (loading) {
    return <Skeleton active />;
  }

  return (
    <Space
      align="start"
      direction="horizontal"
      size="middle"
      style={{ display: 'flex', padding: 20, flexWrap: 'wrap' }}
    >
      <Card
        hoverable
        style={{ width: 340 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
        title="Know your expert"
      >
        <Meta
          title={data?.assignedExp?.[0]?.firstName}
          description={data?.assignedExp?.[0]?.lastName}
        />
      </Card>
      <Card title="jobs" style={{ width: '40vw' }}>
        {!isEmpty(data?.jobs) ? (
          <List
            style={{ height: '65vh', overflow: 'auto' }}
            itemLayout="horizontal"
            dataSource={data?.jobs}
            renderItem={(item: any, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://joesch.moe/api/v1/random?key=${index}`}
                    />
                  }
                  title={<a href="https://ant.design">{item?.name}</a>}
                  description={`Created: ${moment(item?.createdAt).format(
                    'DD, MM YYYY hh:mm a',
                  )} Status ${item?.status}`}
                />
              </List.Item>
            )}
          />
        ) : (
          <CreateJob
            customerId={isLoggedInfo?._id}
            createUserJob={createUserJob}
          />
        )}
      </Card>
    </Space>
  );
});

UserDashboard.prototype = {
  ...UserDashboard,
};
