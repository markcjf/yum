import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => <Card />,
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#b4b0b0',
        windowWidth: 400,
        windowHeight: 290,
    },
});
