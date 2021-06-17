import React from "react";
import {
    ListWrapper,
    ListItem,
    List
} from './style';
import { getCount } from '../../api/utils'
type recType = {
    id: number,
    picUrl: string,
    playCount: number,
    name: string
}
interface recListProps {
    recommendList: recType[]
}
const RecommendList: React.FC<recListProps> = (props) => {
    const { recommendList } = props
    return (
        <ListWrapper>
            <h1>111</h1>
            <List>
                {
                    recommendList.map((item, index) => {
                        return (
                            <ListItem>
                                <div className="img-wrapper">
                                    <img src={item.picUrl} alt="推荐歌单" width="100%" height="100%" />
                                    <div className="play-count">
                                        <i className="iconfont play">&#xe885;</i>
                                        <span className="count">{getCount(item.playCount)}</span>
                                    </div>
                                </div>
                                <div className="desc">{item.name}</div>
                            </ListItem>
                        )
                    })
                }
            </List>
        </ListWrapper>
    )
}
export default RecommendList