/**
 *
 * ExpertDashboard
 *
 */
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get, map } from 'lodash';
import { Avatar, List, Card, Tag } from 'antd';
import styled from 'styled-components/macro';
import { useExpertDashboardSlice } from 'app/pages/ExpertDashboard';
import { selectExpertDashboard } from 'app/pages/ExpertDashboard/selectors';

interface Props {
  isLoggedInfo: any;
}

export const ExpertDashboard = memo(({ isLoggedInfo }: Props) => {
  const dispatch = useDispatch();
  const { actions } = useExpertDashboardSlice();

  const { data } = useSelector(selectExpertDashboard);
  console.log(data);

  useEffect(() => {
    dispatch(actions.getExpertData(isLoggedInfo?._id));
  }, [isLoggedInfo, dispatch, actions]);

  return (
    <Div>
      {data.length > 0 && (
        <Card title="assigned list">
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://joesch.moe/api/v1/random?key=${index}`}
                    />
                  }
                  title={
                    <a href="https://ant.design">
                      {get(item, 'firstName')} has following jobs. pls click on
                      it
                    </a>
                  }
                  description={map(get(item, 'jobs'), itemData => (
                    <Tag>{itemData}</Tag>
                  ))}
                />
              </List.Item>
            )}
          />
        </Card>
      )}
    </Div>
  );
});

const Div = styled.div``;

ExpertDashboard.prototype = {
  ...ExpertDashboard,
};
