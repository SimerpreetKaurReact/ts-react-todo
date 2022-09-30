import React, { useEffect, useState } from "react"

interface TaskItemProps {
    item: string;
    checked: boolean;
    onTaskCheck: (id: string, checked: boolean) => unknown
}
export function TaskItem(props: TaskItemProps) {
    const [color, setColor] = useState<'red' | 'black'>('red')
    const [count, setCount] = useState(1)
    useEffect(() => {
        setColor('black')
        setCount(c => c + 1)

    }, [])
    return (<li style={{ color: color }}><input type="checkbox" checked={props.checked} onChange={(e) => props.onTaskCheck(props.item, e.target.checked)} />{props.item}--{count}</li>)
}
export class TaskItemClass extends React.Component<TaskItemProps, { color: string, count: number }> {
    state = {
        color: "red", count: 1
    }
    componentDidMount() {
        this.setState({
            color: 'black', count: this.state.count + 1
        })
    }
    render() {
        return (<li style={{ color: this.state.color }}><input type="checkbox" checked={this.props.checked}
            onChange={(e) => this.props.onTaskCheck(this.props.item, e.target.checked)} />{this.props.item}--{this.state.count}</li>)
    }

}