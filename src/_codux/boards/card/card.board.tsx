import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => <Card />,
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: 'rgba(172, 169, 169, 0.7)',
        windowWidth: 882,
    },
});
