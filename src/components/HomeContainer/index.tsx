import React, {useCallback} from 'react';
import {GLOBE_CSS} from "@/constants";
import {Button, Input, Space, Table, Tag} from "antd";
import {DataType} from "csstype";
import {Column, ColumnGroup} from "rc-table";

type PropsType = {}

const {Search} = Input;

interface DataType {
    key: React.Key;
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    tags: string[];
}

const data: DataType[] = [
    {
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        firstName: 'Jim',
        lastName: 'Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const HomeContainer: React.FC<PropsType> = (props) => {
    
    const onSearch = useCallback((value: string) => {
        if (!value) return;
        console.log("value search", value)
    }, [])
    
    return (
        <div className={"w-full h-full px-12 flex flex-col gap-6"}>
            <div className={`w-full h-[${GLOBE_CSS.HEIGHT.HOME_NAVBAR_HEIGHT}px] min-h-[${GLOBE_CSS.HEIGHT.HOME_NAVBAR_HEIGHT}px] bg-gray-200 flex justify-between items-center mt-6 px-4 py-2 rounded-xl`}>
                <div className={"h-full content-center"}>
                    <Search placeholder="" onSearch={onSearch} enterButton />
                    
                </div>
                
                <div className={"h-full content-center"}>
                    <Button>Create note</Button>
                </div>
            </div>
            
            <div className={"w-full"}>
                <Table<DataType> dataSource={data}>
                    <ColumnGroup title="Name">
                        <Column title="First Name" dataIndex="firstName" key="firstName" />
                        <Column title="Last Name" dataIndex="lastName" key="lastName" />
                    </ColumnGroup>
                    <Column title="Age" dataIndex="age" key="age" />
                    <Column title="Address" dataIndex="address" key="address" />
                    <Column
                        title="Tags"
                        dataIndex="tags"
                        key="tags"
                        render={(tags: string[]) => (
                            <>
                                {tags.map((tag) => {
                                    let color = tag.length > 5 ? 'geekblue' : 'green';
                                    if (tag === 'loser') {
                                        color = 'volcano';
                                    }
                                    return (
                                        <Tag color={color} key={tag}>
                                            {tag.toUpperCase()}
                                        </Tag>
                                    );
                                })}
                            </>
                        )}
                    />
                    <Column
                        title="Action"
                        key="action"
                        render={(_: any, record: DataType) => (
                            <Space size="middle">
                                <a>Invite {record.lastName}</a>
                                <a>Delete</a>
                            </Space>
                        )}
                    />
                </Table>
            </div>
        </div>
    );
};

export default HomeContainer;