// Sidebar.tsx
import React from 'react';

type SidebarProps = {
  onSelect: (content: string) => void;
};

function Sidebar({ onSelect }: SidebarProps) {
  const menuItems = [
    { id: 1, label: 'Item 1', content: 'Content for Item 1' },
    { id: 2, label: 'Item 2', content: 'Content for Item 2' },
    { id: 3, label: 'Item 3', content: 'Content for Item 3' },
  ];

  return (
    <div className="bg-[#283655] fixed left-0 mt-20 w-72 h-full text-white p-4">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer py-2 px-4 hover:bg-[#3e4a63] rounded"
            onClick={() => onSelect(item.content)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
