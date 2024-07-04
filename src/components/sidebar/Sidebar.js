import React, { useRef, useState } from 'react';
import './Sidebar.css';
import { Dropdown } from 'primereact/dropdown';
import { TieredMenu } from 'primereact/tieredmenu';

const dropdownItems = [
    { label: 'Duplicate', icon: 'far fa-copy', url: '' },
    { label: 'Rename Board', icon: 'far fa-edit', url: '' },
    { label: 'Move To', icon: 'far fa-arrow-alt-circle-right', url: '' },
    { label: 'Change Board type', icon: 'fas fa-plus', url: '' },
    { label: 'Add new space', icon: 'fas fa-plus', url: '' },
    { label: 'Unfavorite', icon: 'far fa-star', url: '' },
    { divider: true },
    { label: 'Archive board', icon: 'fas fa-archive', url: '' },
    { divider: true },
    { label: 'Delete board', icon: 'far fa-trash-alt', url: '' },
  ];
  
  const boardListItems = [
    { name: 'Board 1' },
    { name: 'Board 2' },
    { name: 'Board 3' },
    { name: 'Board 4' },
    { name: 'Board 5' },
    { name: 'Board 6' },
    { name: 'Board 7' },
    { name: 'Board 8' },
    { name: 'Board 9' },
  ];
  
  

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Code to create a new board with the input value goes here
    setShowModal(false);
  };

  const [selectedCountry, setSelectedCountry] = useState(null);
  const menu = useRef(null);
  const spaces = [
    { name: 'Kuu-Laa', code: 'kl' },
    { name: 'E-Biz', code: 'eb' },
  ];
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
      icon: <i class="far fa-clipboard"></i>,
      items: [
        {
          label: "Create from scratch",
          onClick: () => setShowModal(true),
        },
        
        {
          label: 'Create from template',
          url: '',
        },
        {
          label: 'Create from file',
          url: '',
        },
      ],
    },
    {
      label: 'New Folder',
      icon: <i class="far fa-folder"></i>,
    },
  ];
  {showModal && (
    <div className="modal">
      <div className="modal-content">
        <h2>Create Board</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="boardName">Board Name:</label>
          <input type="text" id="boardName" name="boardName" required />
          <div className="modal-buttons">
            <button type="submit" className="btn btn-primary">
              Create
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )}

  return (
    <div className='h-100'>
      <div id="sidebar" className='h-100'>
        <nav>
          <div class="d-flex flex-column">
            {/* Spaces Dropdown */}




            
            <div className='d-flex align-items-center justify-content-between mb-2'>
              <div>Spaces</div>
              <div className='dropdown'>
                <button className='btn dropdown-ellipsis' type='button' data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fas fa-ellipsis-h"></i>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item">
                      <div className='d-flex align-items-center'>
                        <span><i class="fas fa-cog"></i></span>
                        <span className='ms-2'>Main Space</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item">
                      <div className='d-flex align-items-center'>
                        <span><i class="far fa-edit"></i></span>
                        <span className='ms-2'>Rename Space</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item">
                      <div className='d-flex align-items-center'>
                        <span><i class="fas fa-desktop"></i></span>
                        <span className='ms-2'>Change space type</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item">
                      <div className='d-flex align-items-center'>
                        <span><i class="fas fa-home"></i></span>
                        <span className='ms-2'>Set as default space</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item">
                      <div className='d-flex align-items-center'>
                        <span><i class="fas fa-plus"></i></span>
                        <span className='ms-2'>Add new space</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item">
                      <div className='d-flex align-items-center'>
                        <span><i class="far fa-trash-alt"></i></span>
                        <span className='ms-2'>Delete Space</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>














            {/* Spaces Dropdown */}
            <div className='mb-2 sidebar-item'>
              <Dropdown
                value={selectedCountry}
                options={spaces}
                optionLabel="name"
                filter
                showClear
                filterBy="name"
                placeholder='Main Space'
                valueTemplate={selectedCountryTemplate}
                itemTemplate={countryOptionTemplate}
              />
            </div>

            {/* Add Item Button */}
            <div className='d-flex align-items-center mb-2 sidebar-item'>
              <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
              <button className='btn w-100 text-white add-item-btn' type='button' onClick={(e) => menu.current.toggle(e)}>
                <div className='d-flex align-items-center'>
                  <div><i class="fas fa-plus-circle"></i></div>
                  <div className='ps-3'>Add Item</div>
                </div>
              </button>
            </div>

            {/* Search Input */}
            <div className='d-flex align-items-center mb-2  p-rel'>
              <input
                type="text"
                name="search"
                class="form-control search-input"
                size="50"
                placeholder="Search"
              />
              <span class="fas fa-search search-icon"></span>
            </div>

            <hr />

            <div className='h-100'>
              {/* Board List */}
              <div className="board-list">
                {boardListItems.map((board) => (
                  <div className='board-list-item'>
                    <div className='ellipsis-text'>
                      {board.name}
                    </div>
                    <div className='d-flex align-items-center ps-2'>
                      <span className='ps-2 board-menu'>
                        <button className='btn dropdown-ellipsis' type='button' data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fas fa-ellipsis-v"></i>
                        </button>
                        <ul className="dropdown-menu">
                          {dropdownItems.map((dropdownItem) =>
                            dropdownItem.divider ? (
                              <hr class="dropdown-divider" />
                            ) : (
                              <li>
                                <a className="dropdown-item" href={dropdownItem.url}>
                                  <div className='d-flex align-items-center'>
                                    <span><i class={dropdownItem.icon}></i></span>
                                    <span className='ms-2'>{dropdownItem.label}</span>
                                  </div>
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </nav>
      </div>
    </div>
  );
};
export default Sidebar ;