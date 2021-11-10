import React from "react";
import { Footer } from "antd/lib/layout/layout";
import { Col, Row } from "antd";
import { BugOutlined, GithubOutlined } from "@ant-design/icons";

const FooterContent = () => {
	return (
		<Footer style={{ padding: 0 }}>
			<Row
				align="middle"
				style={{ textAlign: "center", height: "64px", backgroundColor: "#001529", color: "#fff", fontSize: "20px" }}
			>
				<Col span={5}>
					<BugOutlined />
				</Col>
				<Col span={14}>Movies</Col>
				<Col span={5}>
					<a href="https://github.com/DimaPth/" target="_blank" rel="noreferrer">
						<GithubOutlined /> GitHub
					</a>
				</Col>
			</Row>
		</Footer>
	);
};

export default FooterContent;
