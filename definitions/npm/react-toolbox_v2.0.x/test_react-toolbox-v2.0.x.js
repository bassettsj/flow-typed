// @flow
import { Button, IconButton, BrowseButton } from 'react-toolbox/lib/button';
function rippleEnded() {
  console.log('Ripple animation ended!');
}

const ButtonTest = () => (
  <section>
    <Button icon="bookmark" label="Bookmark" accent onRippleEnded={rippleEnded} />
    <Button icon="bookmark" label="Bookmark" raised primary rippleMultiple={false} onRippleEnded={rippleEnded} />
    <Button icon="inbox" label="Inbox" flat />
    <Button icon="add" floating />
    <Button icon="add" floating primary />
    <Button href="http://github.com/javivelasco" target="_blank" icon="link" floating accent />
    <Button icon="add" floating primary disabled />
    <Button icon="add" floating accent mini />
    <IconButton icon="favorite" accent />
    <IconButton icon="favorite" inverse />
    <IconButton icon="favorite" />
    <IconButton icon="favorite" disabled />
    <IconButton primary />
    <Button icon="add" label="Add this" flat primary />
    <Button icon="add" label="Add this" flat disabled />
    <IconButton icon="menu" style={{ backgroundColor: 'red' }} inverse />
    <span style={{ verticalAlign: 'middle' }}>Menu</span>
    <IconButton icon="menu" />
    <span style={{ verticalAlign: 'middle' }}>Menu</span>
    <span style={{ verticalAlign: 'middle' }}>Github</span>
    <BrowseButton icon="folder_open" label="BROWSE" raised primary />
    <BrowseButton label="BROWSE" raised />
  </section>
);
