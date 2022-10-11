import { Button, Menu, MenuButton, MenuItem, MenuList, Portal } from "@chakra-ui/react";
import React, { useEffect } from "react";
// import './Dropdown.css';
import { useDisclosure } from "@chakra-ui/react"
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';

export function SubMenu(props: any) {
    const { children } = props;
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Menu isOpen={isOpen} direction="ltr" >
                <MenuButton px={4}
    py={2}
                    onMouseEnter={onOpen}
                    onMouseLeave={onClose}  style={{display:'flex', alignItems:'space-around'}} >
                    Other <ChevronRightIcon/>
                </MenuButton>
                <Portal>
                    <MenuList mx={230} my={-10} onMouseEnter={onOpen} onMouseLeave={onClose}>
                        <MenuItem px={4}
                            py={2}>one</MenuItem>
                        <MenuItem px={4}
                            py={2}>two</MenuItem>
                        <MenuItem px={4}
                            py={2}>three</MenuItem>
                    </MenuList>
                </Portal>
            </Menu>
        </>
    )
}



export default (props: any) => {
    const { children } = props;
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
            <Menu isOpen={isOpen}>
                <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    onMouseEnter={onOpen}
                    onMouseLeave={onClose}>
                    Actions
                </MenuButton>
                <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} maxW={200}>
                    <MenuItem px={4}
                        py={2}>Download</MenuItem>
                    <MenuItem px={4}
                        py={2}>Create a Copy</MenuItem>
                    <MenuItem px={4}
                        py={2}>Mark as Draft</MenuItem>
                    <MenuItem px={4}
                        py={2}>Delete</MenuItem>
                    <MenuItem px={4}
                        py={2}>Attend a Workshop</MenuItem>
                    <MenuItem px={4}
                        py={2} as={SubMenu} />

                </MenuList>
            </Menu>
        </>
    )
}
