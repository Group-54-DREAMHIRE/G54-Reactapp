import { Card, Image, Typography } from "antd";
const { Title } = Typography;

const BlogCard = ({ image, title }) => {
  return (
    <Card style={{width: '250px', height: '200px',}}>
        
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          
        }}
      >
        <Image src={image} preview={false} width={250} height={200} style={{margin: '0 !important', padding: '0'}}/>
        <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: '20px'
        }}
      >
        </div>
<Title style={{ position: "absolute", color: "white" }} level={4}>
          {title}
        </Title>
      </div>
    </Card>
  );
};

export default BlogCard;
