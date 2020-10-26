import React from 'react'
import { Button } from 'reactstrap';

export interface RemoveButtonProps {
    onRemoveSelection: (e: React.MouseEvent<any, MouseEvent>) => void
}

const RemoveButton: React.FC<RemoveButtonProps> = (props) => {
    const {
        onRemoveSelection
        , ...args
    } = props;
    return (
        <Button
            className="rounded-0"
            children={<span>X</span>}
            active
            onClick={e => onRemoveSelection(e)}
            {...args}
        />
    )
}

export default RemoveButton