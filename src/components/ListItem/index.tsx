import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/item';

type Props = {
    item: Item
}

export const ListItem = ({ item }: Props) => {
    const [isCheckd, setIsChecked] = useState(item.done)

    return (
        <C.Container done={isCheckd}>
            <input type="checkbox" checked={isCheckd} onChange={e => setIsChecked(e.target.checked)} />
            <label>{item.name}</label>
        </C.Container>
    )
}