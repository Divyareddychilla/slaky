import React, { useRef, useState } from 'react';
import './Sidebar.css';
import { Dropdown } from 'primereact/dropdown';
import { TieredMenu } from 'primereact/tieredmenu';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { NavLink } from 'react-router-dom';
import { FaSearch, FaRegClipboard, FaAngleDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Sidebar = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isLeft, setIsLeft] = useState(true);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const menu = useRef(null);
    const spaces = [
        { name: 'Kuu-Laa', code: 'kl' },
        { name: 'E-Biz', code: 'eb' },


    ];

    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState('center');

    const [menuItem, setMenuItem] = useState([
        { path: "/", name: "Dashboard", icon: <i class="far fa-clipboard"></i> },
        { path: "/about", name: "About", icon: <i class="far fa-clipboard"></i> },
        { path: "/analytics", name: "Analytics", icon: <i class="far fa-clipboard"></i> },
        { path: "/comment", name: "Comment", icon: <i class="far fa-clipboard"></i> },
        { path: "/product", name: "Product", icon: <i class="far fa-clipboard"></i> },
        { path: "/productList", name: "Product List", icon: <i class="far fa-clipboard"></i> },

        { path: "/new", name: "New", icon: <i class="far fa-clipboard"></i> },
        { path: "/scrumboard", name: "Scrumboard", icon: <i class="far fa-clipboard"></i> },
        { path: "/planning", name: "Planning", icon: <i class="far fa-clipboard"></i> },
        { path: "/basic", name: "Basic", icon: <i class="far fa-clipboard"></i> },
        { path: "/list", name: "List", icon: <i class="far fa-clipboard"></i> },
    ]);

    const [showDialog, setShowDialog] = useState(false);
    const [boardName, setBoardName] = useState('');

    const dialogFooter = (
        <div>
            <Button label="No" icon="pi pi-times" onClick={() => setShowDialog(false)} className="p-button-text" />
        </div>
    );

    const show = (position) => {
        setPosition(position);
        setVisible(true);
    };





    const handleArrowClick = () => {
        setIsLeft(isLeft => !isLeft);
        setIsOpen(isOpen => !isOpen);
    };




    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <div>{option.name}</div>
            </div>
        );
    };

    const items = [
        {
            label: 'New Board',
            icon: <i className="far fa-clipboard"></i>,
            items: [
                {
                    label: 'Create from scratch',
                    command: () => setShowDialog(true),
                },
                {
                    label: 'Create from template',
                },
                {
                    label: 'Create from file',
                },
            ],
        },
        {
            label: 'New Folder',
            icon: <i className="far fa-folder"></i>,
        },
    ];

    const handleCreateBoard = () => {
        setMenuItem([...menuItem, { path: '/', name: boardName, icon: <i class="far fa-clipboard"></i> }]);
        setBoardName('');
        setShowDialog(false);
    };

    return (
        <div className="h-100">
            <div style={{ width: isOpen ? "220px" : "0px" }} className="sidebar h-100">
                <nav>
                    <div className="d-flex flex-column">


                    <div style={{ display: isOpen ? "block" : "none" }}>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <div>Spaces</div>
                            <div className="dropdown">
                                <button
                                    className="btn dropdown-ellipsis"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="fas fa-ellipsis-h"></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item">
                                            <div className="d-flex align-items-center">
                                                <span>
                                                    <i className="fas fa-cog"></i>
                                                </span>
                                                <span className="ms-2">Main Space</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item">
                                            <div className="d-flex align-items-center">
                                                <span>
                                                    <i className="far fa-edit"></i>
                                                </span>
                                                <span className="ms-2">Rename Space</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item">
                                            <div className="d-flex align-items-center">
                                                <span>
                                                    <i className="fas fa-desktop"></i>
                                                </span>
                                                <span className="ms-2">Change space type</span>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a className="dropdown-item">
                                            <div className="d-flex align-items-center">
                                                <span>
                                                    <i className="fas fa-home"></i>
                                                </span>
                                                <span className="ms-2">Set as default space</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item">
                                            <div className="d-flex align-items-center">
                                                <span>
                                                    <i className="fas fa-plus"></i>
                                                </span>
                                                <span className="ms-2">Add new space</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item">
                                            <div className="d-flex align-items-center">
                                                <span>
                                                    <i className="far fa-trash-alt"></i>
                                                </span>
                                                <span className="ms-2">Delete Space</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </div>




                        <div style={{ display: isOpen ? "block" : "none" }} className="mb-2 sidebar-item">
                            <Dropdown
                                value={selectedCountry}
                                options={spaces}
                                optionLabel="name"
                                filter
                                showClear
                                filterBy="name"
                                placeholder="Main Space"
                                valueTemplate={selectedCountryTemplate}
                                itemTemplate={countryOptionTemplate}
                            />
                        </div>


                        <div style={{ display: isOpen ? "block" : "none" }}>
                            <div className="d-flex align-items-center mb-2 sidebar-item">
                                <TieredMenu model={items} popup ref={menu} breakpoint="767px" />

                                <button className="btn w-100 text-white add-item-btn" type="button" onClick={(e) => menu.current.toggle(e)}>
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <i className="fas fa-plus-circle"></i>
                                        </div>
                                        <div className="ps-3">Add Item</div>
                                    </div>
                                </button>
                            </div>
                        </div>


                        <div style={{ display: isOpen ? "block" : "none" }}>
                            <div className="d-flex align-items-center mb-2  p-rel">
                                <input
                                    type="text"
                                    name="search"
                                    className="form-control search-input"
                                    size="50"
                                    placeholder="Search"
                                />
                                <span className="fas fa-search search-icon"></span>
                            </div>
                        </div>


                        <hr style={{ display: isOpen ? "block" : "none" }} />
                        <div style={{ display: isOpen ? "block" : "none" }} className="h-100">
                            <div className="board-list">
                                {menuItem.map((item, index) => (
                                    <NavLink to={item.path} key={index} className="link board-list-item" activeClassName="active">
                                        <div className="d-flex align-items-center">
                                            <div className="icon pe-2">{item.icon}</div>
                                            <div className="link_text ellipsis-text">{item.name}</div>
                                        </div>
                                        <div className="d-flex align-items-center ps-2">
                                            <span>
                                                <i className="fas fa-star"></i>
                                            </span>
                                            <span className="ps-2 board-menu">
                                                <button className="btn dropdown-ellipsis" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="fas fa-ellipsis-v"></i>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a className="dropdown-item">
                                                            <div className="d-flex align-items-center">
                                                                <span>
                                                                    <i className="far fa-copy"></i>
                                                                </span>
                                                                <span className="ms-2">Duplicate</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item">
                                                            <div className="d-flex align-items-center">
                                                                <span>
                                                                    <i className="far fa-edit"></i>
                                                                </span>
                                                                <span className="ms-2">Rename Board</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item">
                                                            <div className="d-flex align-items-center">
                                                                <span>
                                                                    <i className="far fa-arrow-alt-circle-right"></i>
                                                                </span>
                                                                <span className="ms-2">Move To</span>
                                                            </div>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a className="dropdown-item">
                                                            <div className="d-flex align-items-center">
                                                                <span>
                                                                    <i className="fas fa-plus"></i>
                                                                </span>
                                                                <span className="ms-2">Change Board type</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item">
                                                            <div className="d-flex align-items-center">
                                                                <span>
                                                                    <i className="fas fa-plus"></i>
                                                                </span>
                                                                <span className="ms-2">Add new space</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item">
                                                            <div className="d-flex align-items-center">
                                                                <span>
                                                                    <i className="far fa-star"></i>
                                                                </span>
                                                                <span className="ms-2">Unfavorite</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item">
                                                            <div className="d-flex align-items-center">
                                                                <span>
                                                                    <i className="fas fa-archive"></i>
                                                                </span>
                                                                <span className="ms-2">Archive board</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item">
                                                            <div className="d-flex align-items-center">
                                                                <span>
                                                                    <i className="far fa-trash-alt"></i>
                                                                </span>
                                                                <span className="ms-2">Delete board</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </span>
                                        </div>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </nav>

                
                <div className='arrow-click'
                    style={{
                        position: 'absolute',
                        top: '180px',
                        left: isOpen ? '210px' : '0px',
                        width: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        borderRadius: '7px',
                        border: '1px solid #464564',
                        cursor: 'pointer',
                    }}
                    onClick={handleArrowClick}
                >
                    {isLeft ? <FaChevronRight /> : <FaChevronLeft />}


                    <Dialog visible={showDialog} header="Create Board" onHide={() => setShowDialog(false)} footer={dialogFooter} className='my-dialog'>
                        <div className="dialogbox d-flex flex-column align-items-center">
                            <label htmlFor="board-name" className="board-name-text">
                                Board name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="board-name"
                                value={boardName}
                                onChange={(e) => setBoardName(e.target.value)}
                            />
                            <Button label="Create" onClick={handleCreateBoard} className="mt-3 create-button" />
                        </div>
                    </Dialog>

                </div>









            </div>
            <main style={{ marginLeft: isOpen ? "250px" : "0px" }}>
                {children}</main>



        </div>
    );
};

export default Sidebar;