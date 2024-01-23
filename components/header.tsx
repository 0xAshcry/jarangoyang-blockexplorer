import {Box, Container, Text, Group} from '@mantine/core';
import Link from 'next/link';
import {FC} from 'react';
import SearchBar from './searchBar';
import SettingsModal from './settingsModal';
import ThemeToggle from './themeToggle';

const Header: FC = () => {
  return (
    <Box component="header" py="md">
      <Container>
        <Group align="center">
          <Text sx={{fontSize: '1.5em', fontWeight: 800}}>
            <Link href="/">JRG Explorer 🐴</Link>
          </Text>
          <Text sx={{fontSize: '1.5em', fontWeight: 800}}>
            <Link href="https://bit.ly/StoneNftDrop">NFT Drop 🖼</Link>
          </Text>
           <Text sx={{fontSize: '1.5em', fontWeight: 800}}>
            <Link href="https://faucet-jargoy.vercel.app/">Faucet 🚰</Link>
          </Text>
          <Text sx={{fontSize: '1.5em', fontWeight: 800}}>
            <Link href="https://portal.dymension.xyz/rollapp/jarangoyang_6379967-1/">Rollapp 💈</Link>
          </Text>

          {/* pushes the succeeding contents to the right */}
          <span style={{flexGrow: 1}} />

          <SearchBar />
          <SettingsModal />
          <ThemeToggle />
        </Group>
      </Container>
    </Box>
  );
};

export default Header;
