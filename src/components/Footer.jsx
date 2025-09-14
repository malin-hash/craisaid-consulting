import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t py-6 mt-12 bg-black text-white dark:bg-black">
      <div className="container text-center">
        <p className="text-sm">© {new Date().getFullYear()} CRISAID Consulting — Tous droits réservés</p>
      </div>
    </footer>
  )
}
