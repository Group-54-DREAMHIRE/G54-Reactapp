
import React from 'react';
import { Card, Button, Row, Col } from 'antd';
import D_photo from "../../../assets/images/company.png";

const ApprovalsCard = () => {
  return (
    <div className="D_Approval_card">
      <Card className="D_Approval_card_card">
        <Row gutter={24}>
          <Col span={16}>
            <div className="D_Approval_card_left-content">
              <h2 className="D_Approval_card_title">Creative Software</h2>
              <p className="D_Approval_card_paragraph">
                This is a sample paragraph for theBootstrap Buttons: Classes & Styles Explained
              </p>
              <div className="D_Approval_card_buttons">
                <Button type='primary'>View Business Registration Certificate</Button>
                <Button type='primary'>Approve</Button>
                <Button type='primary' danger>Reject</Button>
                
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className="D_Approval_card_right-content">
              <img
                src={D_photo}
                alt="Card Image"
                className="D_Approval_card_image"
              />
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ApprovalsCard;
