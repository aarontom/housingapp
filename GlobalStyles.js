import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

export const ViewStyles = theme =>
  StyleSheet.create({
    'Alternative Login Container': {
      style: {
        alignItems: { minWidth: Breakpoints.Tablet, value: 'center' },
        flexDirection: 'row',
        justifyContent: [
          { minWidth: Breakpoints.Mobile, value: 'center' },
          { minWidth: Breakpoints.Tablet, value: 'center' },
        ],
      },
      props: {},
    },
    'Back Button Circle': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['hs_grey_sixth'],
        borderRadius: 24,
        height: 50,
        justifyContent: 'center',
        width: 50,
      },
      props: {},
    },
    'Book Button View': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['hs_blue_main'],
        borderRadius: 24,
        height: 48,
        justifyContent: 'center',
        width: 150,
      },
      props: {},
    },
    'Bottom Button Container': {
      style: {
        alignItems: 'stretch',
        bottom: 0,
        height: 80,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 12,
        position: 'absolute',
        width: '100%',
      },
      props: {},
    },
    'Bottom Section': {
      style: {
        paddingBottom: 16,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 16,
        width: '100%',
      },
      props: {},
    },
    'Button Circle Blue': { style: { height: 60, width: 60 }, props: {} },
    'Button Container 24': {
      style: {
        alignItems: 'center',
        height: 24,
        justifyContent: 'center',
        width: 24,
      },
      props: {},
    },
    'Button Container Circle': {
      style: { alignItems: 'center', flexDirection: 'row' },
      props: {},
    },
    'Button Edit circle': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['hs_white'],
        borderRadius: 16,
        bottom: 0,
        flexDirection: 'row',
        height: 32,
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        width: 32,
      },
      props: {},
    },
    'Buttons Container': {
      style: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      props: {},
    },
    'Camera Switch Container': {
      style: {
        alignItems: 'center',
        borderRadius: 25,
        bottom: 14,
        height: 50,
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'absolute',
        right: 24,
        width: 50,
      },
      props: {},
    },
    'Check Icon Container': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['hs_blue_main'],
        borderRadius: 20,
        height: 40,
        justifyContent: 'center',
        width: 40,
      },
      props: {},
    },
    'CheckBox Container': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },
      props: {},
    },
    'Contact Button View': {
      style: {
        backgroundColor: theme.colors['hs_white'],
        borderRadius: 8,
        flexDirection: 'row',
        height: 44,
        width: '48%',
      },
      props: {},
    },
    'Contact Card View': {
      style: {
        backgroundColor: theme.colors['hs_blue_fourth'],
        borderRadius: 8,
        height: 228,
        padding: 24,
        width: '100%',
      },
      props: {},
    },
    'Contact Container': {
      style: {
        alignItems: 'center',
        borderRadius: 14,
        height: 164,
        justifyContent: 'center',
        marginBottom: 24,
        width: '100%',
      },
      props: {},
    },
    'Contact Info View': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      props: {},
    },
    'Date Item View': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['hs_blue_third'],
        borderRadius: 12,
        height: 70,
        justifyContent: 'center',
        width: 56,
      },
      props: {},
    },
    'Date item Container': { style: { height: 70 }, props: {} },
    'Detail Section': {
      style: {
        marginBottom: 24,
        paddingLeft: 24,
        paddingRight: 24,
        width: '100%',
      },
      props: {},
    },
    'Detail Section Title': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
        position: 'relative',
      },
      props: {},
    },
    'Eye Buttons Container': {
      style: {
        height: 52,
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        width: 40,
      },
      props: {},
    },
    'FAcilities Icon': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['hs_blue_third'],
        borderRadius: 24,
        height: 45,
        justifyContent: 'center',
        marginBottom: 8,
        overflow: 'hidden',
        width: 45,
      },
      props: {},
    },
    'Facilities Container': {
      style: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 160,
        width: '100%',
      },
      props: {},
    },
    'Facilities Item': {
      style: {
        alignItems: 'center',
        height: 68,
        marginBottom: 24,
        marginRight: 8,
        width: 76,
      },
      props: {},
    },
    'Favorite Item': {
      style: { height: 260, position: 'relative', width: '100%' },
      props: {},
    },
    'Favorite Item Container': {
      style: {
        alignItems: 'stretch',
        backgroundColor: theme.colors['hs_white'],
        borderRadius: 16,
        height: 260,
        overflow: 'hidden',
        position: 'absolute',
        width: '100%',
      },
      props: {},
    },
    'Favorite Item Heart Button Contianer': {
      style: {
        alignItems: 'center',
        height: 40,
        justifyContent: 'center',
        width: 40,
      },
      props: {},
    },
    'Feature Item Info Container': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16,
      },
      props: {},
    },
    'Feature intem Price Container': {
      style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 12,
        paddingRight: 12,
      },
      props: {},
    },
    'Featured Image Container': {
      style: { height: 150, marginBottom: 14, width: '100%' },
      props: {},
    },
    'Featured Item Container': {
      style: {
        borderColor: theme.colors['hs_blue_second'],
        borderRadius: 16,
        borderWidth: 1,
        height: 240,
        overflow: 'hidden',
        width: 190,
      },
      props: {},
    },
    'Featured Item Shadow': {
      style: { bottom: 0, height: '50%', position: 'absolute', width: '100%' },
      props: {},
    },
    'Featured Section': { style: { marginBottom: 24 }, props: {} },
    'Featured Section Title': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 24,
        paddingRight: 24,
        position: 'relative',
      },
      props: {},
    },
    'Featured Tag Container': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['hs_white'],
        borderRadius: 9,
        flexDirection: 'row',
        height: 18,
        justifyContent: 'center',
        left: 16,
        paddingLeft: 6,
        paddingRight: 6,
        position: 'absolute',
        top: 16,
        width: 45,
      },
      props: {},
    },
    'Featured Tag Item': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['hs_blue_second'],
        borderRadius: 9,
        flexDirection: 'row',
        height: 18,
        justifyContent: 'center',
        left: 16,
        paddingLeft: 6,
        paddingRight: 6,
        position: 'absolute',
        top: 16,
      },
      props: {},
    },
    'Filter Button View': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['hs_white'],
        borderRadius: 24,
        height: 48,
        justifyContent: 'center',
        width: 48,
      },
      props: {},
    },
    'Flip Button Background': { style: {}, props: {} },
    'Form Bottom Container': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
      },
      props: {},
    },
    'Gallery Container': {
      style: { flexDirection: 'row', height: 110, width: '100%' },
      props: {},
    },
    'Gallery Item': {
      style: {
        alignItems: 'center',
        borderRadius: 8,
        height: 110,
        justifyContent: 'center',
        overflow: 'hidden',
        width: 100,
      },
      props: {},
    },
    'Gallery Item Overlay': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['hs_overlay'],
        height: '100%',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
      },
      props: {},
    },
    'Heart Button Container': {
      style: {
        alignItems: 'center',
        height: 16,
        justifyContent: 'center',
        width: 16,
      },
      props: {},
    },
    'Home Section Title': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        paddingLeft: 24,
        paddingRight: 24,
        position: 'relative',
      },
      props: {},
    },
    'Home Tour Section Container': { style: { marginBottom: 24 }, props: {} },
    'Icon Item Container': {
      style: {
        alignItems: 'center',
        alignSelf: 'flex-start',
        flexDirection: 'row',
      },
      props: {},
    },
    'Icon Right Container': {
      style: {
        alignItems: 'center',
        height: 40,
        justifyContent: 'center',
        width: 40,
      },
      props: {},
    },
    'Image Container': {
      style: { height: 140, marginBottom: 14, width: '100%' },
      props: {},
    },
    'Image Top Section': {
      style: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        paddingLeft: 24,
        paddingRight: 24,
        position: 'absolute',
        top: 55,
        width: '100%',
      },
      props: {},
    },
    'Item Info Container': {
      style: {
        bottom: 0,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 14,
        paddingLeft: 12,
        paddingRight: 12,
        position: 'absolute',
        width: '100%',
      },
      props: {},
    },
    'Item Info Top Container': {
      style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 12,
        paddingRight: 12,
      },
      props: {},
    },
    'Item Location Container': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 16,
        justifyContent: 'center',
        position: 'relative',
      },
      props: {},
    },
    'Item Price Container': {
      style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 12,
        paddingRight: 12,
      },
      props: {},
    },
    'Item Right Container': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
      },
      props: {},
    },
    'Item Tag': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['hs_blue_third'],
        borderRadius: 9,
        flexDirection: 'row',
        height: 18,
        justifyContent: 'center',
        paddingLeft: 6,
        paddingRight: 6,
        position: 'relative',
        width: 60,
      },
      props: {},
    },
    'Location Result Container': {
      style: {
        bottom: 24,
        height: 200,
        paddingLeft: 24,
        paddingRight: 24,
        position: 'absolute',
        width: '100%',
      },
      props: {},
    },
    'Login Divider Container': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 22,
        justifyContent: 'space-between',
        marginBottom: 16,
        width: '100%',
      },
      props: {},
    },
    'Login Line': {
      style: {
        backgroundColor: theme.colors['hs_grey_fourth'],
        height: 1,
        width: '42%',
      },
      props: {},
    },
    'Logo Container': {
      style: {
        alignItems: 'center',
        borderColor: theme.colors['hs_grey_fifth'],
        borderRadius: 16,
        borderWidth: 0.75,
        height: 60,
        justifyContent: 'center',
        width: 80,
      },
      props: {},
    },
    'Map Container': {
      style: {
        borderRadius: 8,
        height: 190,
        overflow: 'hidden',
        width: '100%',
      },
      props: {},
    },
    'Map Result Top Container': {
      style: {
        paddingLeft: 24,
        paddingRight: 24,
        position: 'absolute',
        top: 46,
        width: '100%',
      },
      props: {},
    },
    'Map Search Input container': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['hs_white'],
        borderRadius: 16,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginRight: 8,
        paddingLeft: 20,
        paddingRight: 20,
      },
      props: {},
    },
    'Map Search View': {
      style: {
        flexDirection: 'row',
        height: 48,
        position: 'relative',
        width: '100%',
      },
      props: {},
    },
    'Map Top Container': {
      style: {
        flex: 0,
        height: '100%',
        justifyContent: 'space-between',
        padding: 24,
        paddingTop: 68,
        position: 'absolute',
        top: 0,
        width: '100%',
      },
      props: {},
    },
    'More Button Container': { style: {}, props: {} },
    'Normal Button Container': {
      style: {
        alignItems: 'center',
        alignSelf: 'auto',
        backgroundColor: theme.colors['hs_blue_main'],
        borderRadius: 24,
        height: 48,
        justifyContent: 'center',
        maxWidth: 450,
        width: '100%',
      },
      props: {},
    },
    'Notificaiton Items Left': {
      style: { flex: 1, justifyContent: 'center', marginRight: 14 },
      props: {},
    },
    'Notification Container': {
      style: {
        alignItems: 'center',
        height: 24,
        justifyContent: 'center',
        width: 24,
      },
      props: {},
    },
    'Notification Count View': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['hs_blue_main'],
        borderRadius: 11,
        height: 22,
        justifyContent: 'center',
        width: 22,
      },
      props: {},
    },
    'Notification Icon View': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['hs_blue_main'],
        borderRadius: 22,
        height: 44,
        justifyContent: 'center',
        width: 44,
      },
      props: {},
    },
    'Notification Item Container': {
      style: {
        height: 60,
        marginBottom: 24,
        paddingLeft: 24,
        paddingRight: 24,
        position: 'relative',
        width: '100%',
      },
      props: {},
    },
    'Notification Setting Item': {
      style: {
        backgroundColor: theme.colors['hs_white'],
        borderRadius: 12,
        height: 68,
        marginBottom: 12,
        position: 'relative',
        width: '100%',
      },
      props: {},
    },
    'Notification Settings Item': {
      style: {
        alignItems: 'flex-start',
        backgroundColor: theme.colors['hs_white'],
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-between',
        width: '100%',
      },
      props: {},
    },
    'Notification Title Container': {
      style: { alignItems: 'center', flexDirection: 'row' },
      props: {},
    },
    'Notification View': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 20,
        marginBottom: 20,
        marginTop: 20,
        width: '100%',
      },
      props: {},
    },
    'Notifications Settings Container': { style: {}, props: {} },
    'Onboarding Content': {
      style: {
        alignItems: [
          { minWidth: Breakpoints.Mobile, value: 'flex-end' },
          { minWidth: Breakpoints.Tablet, value: 'stretch' },
          { minWidth: Breakpoints.Laptop, value: 'stretch' },
        ],
        bottom: 0,
        height: [
          { minWidth: Breakpoints.Tablet, value: '35%' },
          { minWidth: Breakpoints.Desktop, value: '40%' },
          { minWidth: Breakpoints.Laptop, value: '35%' },
          { minWidth: Breakpoints.Mobile, value: '45%' },
        ],
        justifyContent: [
          { minWidth: Breakpoints.Tablet, value: 'center' },
          { minWidth: Breakpoints.Mobile, value: 'center' },
          { minWidth: Breakpoints.Laptop, value: 'center' },
        ],
        overflow: { minWidth: Breakpoints.Laptop, value: 'hidden' },
        position: 'absolute',
        width: [
          { minWidth: Breakpoints.Tablet, value: '100%' },
          { minWidth: Breakpoints.Mobile, value: '100%' },
        ],
      },
      props: {},
    },
    'Onboarding Info Container': {
      style: {
        alignItems: 'center',
        flex: 0,
        height: [
          { minWidth: Breakpoints.Tablet, value: 180 },
          { minWidth: Breakpoints.Desktop, value: 250 },
          { minWidth: Breakpoints.Laptop, value: 200 },
        ],
        justifyContent: 'center',
        marginTop: 18,
        paddingLeft: 40,
        paddingRight: 40,
        position: 'absolute',
        width: '100%',
      },
      props: {},
    },
    'Password Input Container': {
      style: { height: 52, justifyContent: 'center', marginBottom: 16 },
      props: {},
    },
    'Preference Item Container': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-between',
        marginBottom: 4,
        paddingRight: 2,
        width: '100%',
      },
      props: {},
    },
    'Price Container': { style: { height: 48 }, props: {} },
    'Profile Container': { style: { flexDirection: 'row' }, props: {} },
    'Profile Edit Header': {
      style: {
        alignItems: 'center',
        height: 120,
        justifyContent: 'space-between',
        marginBottom: 24,
      },
      props: {},
    },
    'Profile Header Container': {
      style: {
        alignItems: 'center',
        height: 190,
        justifyContent: 'space-between',
        marginBottom: 24,
      },
      props: {},
    },
    'Profile Header Image Container': {
      style: {
        alignItems: 'center',
        height: 120,
        justifyContent: 'center',
        width: 120,
      },
      props: {},
    },
    'Profile Image Container': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['hs_grey_sixth'],
        borderRadius: 24,
        height: 50,
        justifyContent: 'center',
        overflow: 'hidden',
        width: 50,
      },
      props: {},
    },
    'Profile Item': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-between',
        marginBottom: 16,
        width: '100%',
      },
      props: {},
    },
    'Profile Item Icon': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['hs_blue_third'],
        borderRadius: 12,
        height: 40,
        justifyContent: 'center',
        width: 40,
      },
      props: {},
    },
    'Profile Item Left Container': {
      style: { alignItems: 'center', flexDirection: 'row' },
      props: {},
    },
    'Profile Name Container': {
      style: { alignItems: 'center', flexDirection: 'row', marginBottom: 6 },
      props: {},
    },
    'Profile Section Container': { style: { marginBottom: 16 }, props: {} },
    'Profile Section Title': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
        position: 'relative',
      },
      props: {},
    },
    'Profile Text Container': {
      style: { justifyContent: 'space-between' },
      props: {},
    },
    'Property Detail Info': {
      style: {
        alignItems: 'flex-start',
        marginBottom: 24,
        paddingLeft: 24,
        paddingRight: 24,
        width: '100%',
      },
      props: {},
    },
    'Property Gallery Section': {
      style: {
        justifyContent: 'flex-start',
        marginBottom: 24,
        paddingLeft: 24,
        paddingRight: 24,
      },
      props: {},
    },
    'Property Icons Section': {
      style: {
        flexDirection: 'row',
        height: 35,
        justifyContent: 'space-between',
        marginBottom: 24,
        paddingLeft: 24,
        paddingRight: 24,
        width: '100%',
      },
      props: {},
    },
    'Property Title Section': {
      style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
        paddingLeft: 24,
        paddingRight: 24,
      },
      props: {},
    },
    'Question Button View': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['hs_white'],
        borderRadius: 8,
        flexDirection: 'row',
        height: 44,
        justifyContent: 'center',
        marginTop: 12,
        width: '100%',
      },
      props: {},
    },
    'Rating Container': {
      style: {
        backgroundColor: theme.colors['hs_white'],
        borderRadius: 9,
        height: 18,
        justifyContent: 'center',
        position: 'absolute',
        right: 16,
        top: 16,
        width: 45,
      },
      props: {},
    },
    'Ratings View': {
      style: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        height: 24,
        justifyContent: 'center',
      },
      props: {},
    },
    'Received Message Container': {
      style: {
        alignItems: 'center',
        borderRadius: 14,
        height: 196,
        justifyContent: 'center',
        marginBottom: 24,
        width: '100%',
      },
      props: {},
    },
    'Recent Info Top Container': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      props: {},
    },
    'Recent Search Container': { style: { marginBottom: 24 }, props: {} },
    'Recent Search Items Container': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 48,
        justifyContent: 'space-between',
        padding: 12,
        width: '100%',
      },
      props: {},
    },
    'Recent Viewed Item Container': {
      style: {
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-between',
        width: '100%',
      },
      props: {},
    },
    'Recommended Grid Container': { style: { padding: 14 }, props: {} },
    'Recommended Item Container': { style: { flex: 0, padding: 8 }, props: {} },
    'Recommended Item Info Bottom': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 22,
        justifyContent: 'space-between',
        position: 'relative',
      },
      props: {},
    },
    'Recommended Item View': {
      style: {
        borderRadius: 12,
        height: 190,
        overflow: 'hidden',
        width: '100%',
      },
      props: {},
    },
    'Recommended Items Container': {
      style: { flex: 1, flexDirection: 'column', flexWrap: 'nowrap' },
      props: {},
    },
    'Recommended Section': { style: {}, props: {} },
    'Register Link Container': {
      style: { alignItems: 'center', height: 30, justifyContent: 'flex-end' },
      props: {},
    },
    'Result Option View': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['hs_blue_main'],
        borderRadius: 24,
        height: 48,
        justifyContent: 'center',
        width: 48,
      },
      props: {},
    },
    'Result Option View Inactive': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['hs_blue_fourth'],
        borderRadius: 24,
        height: 48,
        justifyContent: 'center',
        width: 48,
      },
      props: {},
    },
    'Result View': {
      style: {
        backgroundColor: theme.colors['hs_white'],
        borderRadius: 12,
        height: 200,
        justifyContent: 'space-between',
        padding: 24,
        width: '100%',
      },
      props: {},
    },
    'Sales Item View': {
      style: { height: 74, marginBottom: 12, width: '100%' },
      props: {},
    },
    'Search Container': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['hs_grey_sixth'],
        borderRadius: 16,
        flexDirection: 'row',
        height: 52,
        paddingBottom: 14,
        paddingTop: 14,
        width: '100%',
      },
      props: {},
    },
    'Search Section': {
      style: {
        alignItems: 'center',
        flexDirection: 'column',
        height: 52,
        justifyContent: 'center',
        marginBottom: 24,
      },
      props: {},
    },
    'Section Title': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
        position: 'relative',
      },
      props: {},
    },
    'See More Button Container': {
      style: { alignItems: 'center', flexDirection: 'row' },
      props: {},
    },
    'Settings Item': {
      style: {
        alignItems: 'center',
        flexDirection: 'column',
        height: 40,
        justifyContent: 'center',
        marginBottom: 16,
        width: '100%',
      },
      props: {},
    },
    'Sort Button Container': { style: {}, props: {} },
    'Tag Active Container': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['hs_blue_main'],
        borderColor: theme.colors['hs_blue_main'],
        borderRadius: 18,
        borderWidth: 1,
        height: 36,
        justifyContent: 'center',
        paddingBottom: 6,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 6,
      },
      props: {},
    },
    'Tag Container': { style: { height: 36 }, props: {} },
    'Tag Inactive Container': {
      style: {
        alignItems: 'center',
        borderColor: theme.colors['hs_blue_main'],
        borderRadius: 18,
        borderWidth: 1,
        height: 36,
        justifyContent: 'center',
        paddingBottom: 6,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 6,
      },
      props: {},
    },
    'Terms and Conditions Container': {
      style: {
        alignItems: [
          { minWidth: Breakpoints.Mobile, value: 'flex-start' },
          { minWidth: Breakpoints.Tablet, value: 'center' },
        ],
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 24,
        width: '100%',
      },
      props: {},
    },
    'Time Item Container': { style: { height: 40, width: 84 }, props: {} },
    'Time Item View': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['hs_blue_main'],
        borderRadius: 12,
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        width: 84,
      },
      props: {},
    },
    'Title Container': {
      style: {
        alignItems: 'center',
        marginBottom: 24,
        paddingLeft: 24,
        paddingRight: 24,
      },
      props: {},
    },
    'Title Sectio Right Side': {
      style: { alignItems: 'flex-start' },
      props: {},
    },
    'Title Section Left Side': {
      style: { alignItems: 'flex-start' },
      props: {},
    },
    'Top Container': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        marginBottom: 24,
        width: '100%',
      },
      props: {},
    },
    'Top Container No Margin Bottom': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        paddingLeft: 24,
        paddingRight: 24,
        width: '100%',
      },
      props: {},
    },
    'Top Image Container': {
      style: {
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        height: 400,
        marginBottom: 24,
        overflow: 'hidden',
        width: '100%',
      },
      props: {},
    },
    'Top Section Map Result': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'flex-start',
        marginBottom: 24,
        width: '100%',
      },
      props: {},
    },
    'Type Buttons Container': {
      style: { flexDirection: 'row', paddingLeft: 24, paddingRight: 24 },
      props: {},
    },
    'Type Item Container': { style: { height: 48, width: 128 }, props: {} },
    'Type Item View': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['hs_blue_third'],
        borderRadius: 12,
        flexDirection: 'row',
        height: 48,
        justifyContent: 'center',
        width: 128,
      },
      props: {},
    },
    'Viartual App Left View': {
      style: { alignItems: 'center', flexDirection: 'row' },
      props: {},
    },
    'Virtual App Item Container': {
      style: {
        alignItems: 'center',
        borderColor: theme.colors['hs_grey_sixth'],
        borderRadius: 14,
        borderWidth: 2,
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-between',
        marginBottom: 8,
        paddingLeft: 26,
        paddingRight: 14,
      },
      props: {},
    },
    'Virtual App Steps': { style: { flex: 1 }, props: {} },
    'Virtual Text Container': { style: {}, props: {} },
    'icon Circle': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['hs_blue_third'],
        borderRadius: 18,
        height: 35,
        justifyContent: 'center',
        marginRight: 8,
        overflow: 'hidden',
        width: 35,
      },
      props: {},
    },
    'item Info Bottom Container': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 12,
        paddingRight: 12,
      },
      props: {},
    },
  });

export const TouchableStyles = theme =>
  StyleSheet.create({ Touchable: { style: {}, props: {} } });

export const ScrollViewStyles = theme =>
  StyleSheet.create({
    'Date Scroll': {
      style: { height: 70, paddingLeft: 24, paddingRight: 16 },
      props: {},
    },
    'Detail Scroll': { style: { width: '100%' }, props: {} },
    'Favorites Scroll': {
      style: {
        alignItems: 'stretch',
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 24,
        width: '100%',
      },
      props: {},
    },
    'Featured Scroll': {
      style: { height: 240, paddingLeft: 24, paddingRight: 8 },
      props: {},
    },
    'Gallery Scroll': { style: {}, props: {} },
    'Search Scroll': { style: { width: '100%' }, props: {} },
    'Tag Scroll': {
      style: {
        alignItems: 'stretch',
        height: 36,
        paddingLeft: 24,
        paddingRight: 10,
      },
      props: {},
    },
    'Time Scroll': {
      style: { height: 40, paddingLeft: 24, paddingRight: 16 },
      props: {},
    },
  });

export const LinkStyles = theme =>
  StyleSheet.create({
    'Auth Link': {
      style: {
        color: theme.colors['hs_blue_main'],
        fontFamily: 'Inter_500Medium',
        fontSize: 16,
        textDecorationLine: 'none',
      },
      props: {},
    },
    'Forgot Password Link': {
      style: {
        color: theme.colors.primary,
        fontFamily: 'Inter_400Regular',
        fontSize: 12,
      },
      props: {},
    },
    'Help Link': {
      style: {
        color: theme.colors['hs_blue_main'],
        fontFamily: 'Inter_400Regular',
        textDecorationLine: 'underline',
      },
      props: {},
    },
    Link: { style: { color: theme.colors.primary }, props: {} },
    'Terms Link': {
      style: {
        color: theme.colors['hs_blue_main'],
        fontFamily: 'Inter_400Regular',
        fontSize: 14,
        lineHeight: 16,
        textAlign: 'left',
      },
      props: {},
    },
  });

export const ImageStyles = theme =>
  StyleSheet.create({
    'Arrow Back': { style: { height: 100, width: 100 }, props: {} },
    'Arrow Right': { style: { height: 100, width: 100 }, props: {} },
    'Arrow Right 2': { style: { height: 12, width: 12 }, props: {} },
    'Camera Flip Icon': { style: { height: 100, width: 100 }, props: {} },
    'Contact Profile Image': { style: { height: 100, width: 100 }, props: {} },
    'Gallery Image': { style: { height: '100%', width: '100%' }, props: {} },
    'Icon 12 x 12': {
      style: { height: 12, marginRight: 12, position: 'relative', width: 12 },
      props: {},
    },
    'Icon 14 x 14': {
      style: { height: 14, marginRight: 12, position: 'relative', width: 14 },
      props: {},
    },
    'Icon 16 x 16': {
      style: { height: 16, position: 'relative', width: 16 },
      props: {},
    },
    'Icon 18 x 18': {
      style: { height: 18, position: 'relative', width: 18 },
      props: {},
    },
    'Icon 20 x 20': {
      style: { height: 20, position: 'relative', width: 20 },
      props: {},
    },
    'Icon 24 x 24': { style: { height: 24, width: 24 }, props: {} },
    'Icon 35 x 35': { style: { height: 100, width: 100 }, props: {} },
    Image: { style: { height: 100, width: 100 }, props: {} },
    'Logo Image': { style: { height: 24, width: 24 }, props: {} },
    'Map Filter Image': { style: { height: 24, width: 24 }, props: {} },
    'Notification Image': { style: { height: 24, width: 24 }, props: {} },
    'Onboarding Background': {
      style: {
        bottom: { minWidth: Breakpoints.Tablet, value: 0 },
        height: [
          { minWidth: Breakpoints.Laptop, value: '100%' },
          { minWidth: Breakpoints.Desktop, value: '370%' },
          { minWidth: Breakpoints.Mobile, value: '100%' },
          { minWidth: Breakpoints.Tablet, value: '100%' },
        ],
        position: [
          { minWidth: Breakpoints.Mobile, value: 'relative' },
          { minWidth: Breakpoints.Tablet, value: 'absolute' },
        ],
        width: [
          { minWidth: Breakpoints.Laptop, value: '100%' },
          { minWidth: Breakpoints.Tablet, value: '100%' },
          { minWidth: Breakpoints.Mobile, value: '100%' },
        ],
      },
      props: {},
    },
    'Pin IMage': {
      style: { height: 10, marginRight: 6, width: 10 },
      props: {},
    },
    'Profile Header Image': { style: { height: 100, width: 100 }, props: {} },
    'Profile Image': { style: { height: '100%', width: '100%' }, props: {} },
    'Property Image': { style: { height: '100%', width: '100%' }, props: {} },
    Star: { style: { height: 8, width: 8 }, props: {} },
    'Viewed image': {
      style: { borderRadius: 8, height: 80, width: 80 },
      props: {},
    },
  });

export const TextInputStyles = theme =>
  StyleSheet.create({
    'Map Search Input text': {
      style: {
        borderColor: '"rgba(0, 0, 0, 0)"',
        borderRadius: 16,
        color: theme.colors['hs_grey_main'],
        fontFamily: 'Inter_400Regular',
        fontSize: 14,
        height: 48,
        marginRight: 8,
        padding: 16,
        paddingLeft: 12,
        paddingRight: 12,
        width: '82%',
      },
      props: {},
    },
    'Password Input': {
      style: {
        backgroundColor: theme.colors['hs_grey_sixth'],
        borderColor: '"rgba(0, 0, 0, 0)"',
        borderRadius: 16,
        color: theme.colors['hs_grey_main'],
        fontFamily: 'Inter_400Regular',
        height: 52,
        paddingBottom: 16,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 16,
        zIndex: 0,
      },
      props: {},
    },
    'Search Text Input': {
      style: {
        backgroundColor: theme.colors['hs_grey_sixth'],
        borderColor: '"rgba(0, 0, 0, 0)"',
        borderRadius: 16,
        color: theme.colors['hs_grey_main'],
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
        height: 52,
        paddingBottom: 16,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 16,
        width: '100%',
      },
      props: {},
    },
    'Text Input': {
      style: {
        backgroundColor: theme.colors['hs_grey_sixth'],
        borderColor: '"rgba(0, 0, 0, 0)"',
        borderRadius: 16,
        color: theme.colors['hs_grey_main'],
        fontFamily: 'Inter_400Regular',
        height: 52,
        paddingBottom: 16,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 16,
      },
      props: {},
    },
  });

export const ShadowStyles = theme =>
  StyleSheet.create({
    'Bottom Section Shadow': {
      style: { opacity: 0.4, width: '100%' },
      props: {},
    },
    'Edit Button Shadow': {
      style: {
        borderRadius: 16,
        bottom: 0,
        height: 32,
        opacity: 0.5,
        position: 'absolute',
        right: 0,
        width: 32,
      },
      props: {},
    },
    'Favorite Shadow': {
      style: { height: 260, position: 'relative', width: '100%' },
      props: {},
    },
    'Notification Settings Items Shadow': {
      style: { borderRadius: 12, height: 68, opacity: 0.3, width: '100%' },
      props: {},
    },
    'Result Shadow': { style: { height: 200, width: '100%' }, props: {} },
  });

export const PressableStyles = theme =>
  StyleSheet.create({
    'Bottom Cutton View': { style: { marginBottom: 24 }, props: {} },
    'Map Result Back Button': {
      style: { marginBottom: 12, width: 50 },
      props: {},
    },
    'Tag Button Pressable': { style: { marginRight: 12 }, props: {} },
  });

export const RadioButtonGroupStyles = theme =>
  StyleSheet.create({
    'Radio Button Group': {
      style: { marginLeft: 24, marginRight: 24 },
      props: {},
    },
  });

export const RadioButtonStyles = theme =>
  StyleSheet.create({
    'Radio Button': { style: { position: 'relative' }, props: {} },
  });

export const DividerStyles = theme =>
  StyleSheet.create({
    'Contact divider': { style: { height: 2, width: '100%' }, props: {} },
    Divider: { style: { height: 1 }, props: {} },
  });

export const SwiperStyles = theme =>
  StyleSheet.create({
    'Property Swiper': { style: { height: 400, width: '100%' }, props: {} },
    Swiper: { style: { height: 300, width: '100%' }, props: {} },
  });

export const LinearGradientStyles = theme =>
  StyleSheet.create({
    'Featured Item SHadow': {
      style: {
        bottom: 0,
        flex: 1,
        height: '50%',
        position: 'absolute',
        width: '100%',
      },
      props: {},
    },
    'Linear Gradient': { style: { flex: 1 }, props: {} },
  });

export const SwiperItemStyles = theme =>
  StyleSheet.create({
    'Property Swiper Item': {
      style: { height: '100%', width: '100%' },
      props: {},
    },
  });

export const CircleStyles = theme =>
  StyleSheet.create({
    'Notification Dot': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['hs_red'],
        height: 6,
        justifyContent: 'center',
        position: 'absolute',
        right: 2,
        top: 2,
        width: 6,
      },
      props: {},
    },
  });

export const TextStyles = theme =>
  StyleSheet.create({
    'Body 1': {
      style: {
        color: theme.colors.strong,
        fontFamily: 'Inter_600SemiBold',
        fontSize: 20,
      },
      props: {},
    },
    'Body 10': {
      style: {
        color: theme.colors.strong,
        fontFamily: 'Inter_500Medium',
        fontSize: 10,
      },
      props: {},
    },
    'Body 11': {
      style: {
        color: theme.colors.strong,
        fontFamily: 'Inter_500Medium',
        fontSize: 8,
      },
      props: {},
    },
    'Body 2': {
      style: {
        color: theme.colors.strong,
        fontFamily: 'Inter_600SemiBold',
        fontSize: 18,
      },
      props: {},
    },
    'Body 3': {
      style: {
        color: theme.colors.strong,
        fontFamily: 'Inter_500Medium',
        fontSize: 16,
      },
      props: {},
    },
    'Body 4': {
      style: {
        color: theme.colors.strong,
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
      },
      props: {},
    },
    'Body 5': {
      style: {
        color: theme.colors.strong,
        fontFamily: 'Inter_600SemiBold',
        fontSize: 14,
      },
      props: {},
    },
    'Body 6': {
      style: {
        color: theme.colors.strong,
        fontFamily: 'Inter_500Medium',
        fontSize: 14,
        lineHeight: 16,
      },
      props: {},
    },
    'Body 7': {
      style: {
        color: theme.colors.strong,
        fontFamily: 'Inter_400Regular',
        fontSize: 14,
        lineHeight: 16,
      },
      props: {},
    },
    'Body 8': {
      style: {
        color: theme.colors.strong,
        fontFamily: 'Inter_600SemiBold',
        fontSize: 12,
      },
      props: {},
    },
    'Body 9': {
      style: {
        color: theme.colors.strong,
        fontFamily: 'Inter_400Regular',
        fontSize: 12,
        lineHeight: 16,
      },
      props: {},
    },
    Text: { style: { color: theme.colors.strong }, props: {} },
    'Title 1': {
      style: {
        color: theme.colors.strong,
        fontFamily: 'Inter_600SemiBold',
        fontSize: 32,
      },
      props: {},
    },
    'Title 2': {
      style: {
        color: theme.colors.strong,
        fontFamily: 'Inter_600SemiBold',
        fontSize: 24,
        lineHeight: 30,
      },
      props: {},
    },
    'Title 3': {
      style: {
        color: theme.colors.strong,
        fontFamily: 'Inter_500Medium',
        fontSize: 24,
        lineHeight: 30,
      },
      props: {},
    },
    'Title 4': {
      style: {
        color: theme.colors.strong,
        fontFamily: 'Inter_600SemiBold',
        fontSize: 20,
      },
      props: {},
    },
    'Title 5': {
      style: {
        color: theme.colors.strong,
        fontFamily: 'Inter_600SemiBold',
        fontSize: 18,
      },
      props: {},
    },
    'Title 6': {
      style: {
        color: theme.colors.strong,
        fontFamily: 'Inter_500Medium',
        fontSize: 18,
      },
      props: {},
    },
    'Title 7': {
      style: {
        color: theme.colors.strong,
        fontFamily: 'Inter_500Medium',
        fontSize: 16,
        lineHeight: 24,
      },
      props: {},
    },
    'Title 8': {
      style: {
        color: theme.colors.strong,
        fontFamily: 'Inter_500Medium',
        fontSize: 14,
      },
      props: {},
    },
  });

export const ImageBackgroundStyles = theme =>
  StyleSheet.create({ 'Background Image': { style: { flex: 1 }, props: {} } });

export const ScreenContainerStyles = theme =>
  StyleSheet.create({
    'Screen Container': {
      style: {
        backgroundColor: theme.colors['hs_white'],
        overflow: { minWidth: Breakpoints.Laptop, value: 'hidden' },
        paddingBottom: 12,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 24,
      },
      props: {},
    },
    'Screen Container No Padding Horizontal': {
      style: {
        backgroundColor: theme.colors['hs_white'],
        overflow: { minWidth: Breakpoints.Laptop, value: 'hidden' },
        paddingBottom: 12,
        paddingTop: 24,
      },
      props: {},
    },
    'Screen No Padding': {
      style: { overflow: { minWidth: Breakpoints.Laptop, value: 'hidden' } },
      props: {},
    },
  });

export const CheckboxStyles = theme =>
  StyleSheet.create({ 'Checkbox 2': { style: { marginRight: 8 }, props: {} } });

export const FlatListStyles = theme =>
  StyleSheet.create({
    'Featured List': {
      style: { height: 240, paddingLeft: 24, paddingRight: 8 },
      props: {},
    },
  });

export const MapViewStyles = theme =>
  StyleSheet.create({
    'Map View': { style: { flex: 1, height: 190, width: '100%' }, props: {} },
    'Map View Fullscreen': {
      style: { flex: 1, height: 190, width: '100%' },
      props: {},
    },
  });

export const CheckboxRowStyles = theme =>
  StyleSheet.create({
    'Checkbox Row': { style: { minHeight: 50 }, props: {} },
  });

export const TabViewStyles = theme =>
  StyleSheet.create({
    'Tab View': {
      style: {
        color: theme.colors['hs_grey_main'],
        fontFamily: 'Inter_600SemiBold',
        textTransform: 'capitalize',
        width: '100%',
      },
      props: {},
    },
  });

export const TabViewItemStyles = theme =>
  StyleSheet.create({
    'Tab View Item': { style: { flex: 1, width: '100%' }, props: {} },
  });

export const FetchStyles = theme =>
  StyleSheet.create({ Fetch: { style: { minHeight: 40 }, props: {} } });
