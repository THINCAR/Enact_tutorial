import Button from '@enact/sandstone/Button';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/sandstone/Panels';

const MainPanel = kind({
	name: 'MainPanel',

	render: (props) => (
		<Panel {...props}>
			<Header title="Hello THINCAR" />
			<Button>Click me</Button>
			<Button>Click me</Button>
			<Button>Click me</Button>
			<Button>Click me</Button>
			<Button>Click me</Button>
			<Button>Click me</Button>
			<Button>Click me</Button>
			<Button>Click me</Button>
			<Button>Click me</Button>
			<Button>Click me</Button>
			<Button>Click me</Button>
		</Panel>
	)
});

export default MainPanel;
