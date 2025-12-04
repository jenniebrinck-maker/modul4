/* ------------------------------------------------------------ */
/* MOBILMENY MED SLIDE-IN */
/* ------------------------------------------------------------ */

.main-nav {
  transition: max-height 0.4s ease;
  overflow: hidden;
  max-height: 0;
}

.main-nav.active {
  max-height: 500px; /* tillräckligt stort för alla länkar */
}

@media (min-width: 900px) {
  .main-nav {
    max-height: none; /* desktop */
  }
}
