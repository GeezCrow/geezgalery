const TAB_LABELS = {
  gallery:     '[ about me ]',
  fullgallery: '[ full gallery ]',
  commissions: '[ commissions ]',
  indiedev:    '[ indiedev ]',
  social:      '[ find me ]',
};

export default function Nav({ tab, setTab, tabs }) {
  return (
    <div className="nav">
      {tabs.map(t => (
        <button
          key={t}
          className={`nav-btn${tab === t ? ' active' : ''}`}
          onClick={() => setTab(t)}
        >
          {TAB_LABELS[t] ?? `[ ${t} ]`}
        </button>
      ))}
    </div>
  );
}
