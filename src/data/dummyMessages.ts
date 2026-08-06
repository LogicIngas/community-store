// Pre-defined options for vendors to send to users
export const VendorMessageOptions = [
  { id: 'msg_1', text: 'We have received your order and are preparing it.' },
  { id: 'msg_2', text: 'Your order is ready for pickup.' },
  { id: 'msg_3', text: 'Your delivery is on the way.' },
  { id: 'msg_4', text: 'There is a slight delay with your order, apologies for the inconvenience.' },
];

// Helper function to generate the automated initial message when an order is placed
export const generateAutomatedPurchaseMessage = (vendorName: string, orderId: string) => {
  return `Thank you for your purchase! Your order #${orderId} from ${vendorName} has been confirmed.`;
};

// Dummy profiles for testing the roles and testing quick logins later
export const DummyProfiles = {
  vendor: {
    id: 'vendor_123',
    role: 'vendor',
    name: "Tech Guy's",
  },
  student: {
    id: 'student_456',
    role: 'student',
    name: 'Inga Mbobo',
  },
  community: {
    id: 'community_789',
    role: 'community',
    name: 'John Doe',
  },
  faculty: {
    id: 'faculty_012',
    role: 'faculty',
    name: 'Dr. Jane Smith',
  }
};

// Dummy conversation data representing a chat between a user and a vendor
export const DummyConversations = [
  {
    conversationId: 'conv_1',
    vendorId: DummyProfiles.vendor.id,
    vendorName: DummyProfiles.vendor.name,
    userId: DummyProfiles.student.id,
    userName: DummyProfiles.student.name,
    userRole: DummyProfiles.student.role,
    productName: "Logitech MX Master 3S",
    messages: [
      {
        id: 'm_1_1',
        senderType: 'system', // Automated message triggered by purchase
        text: generateAutomatedPurchaseMessage(DummyProfiles.vendor.name, 'ORD-9823'),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
      },
      {
        id: 'm_1_2',
        senderType: 'vendor', // Manual status update sent by the vendor
        text: VendorMessageOptions[0].text,
        timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 mins ago
      }
    ]
  },
  {
    conversationId: 'conv_2',
    vendorId: DummyProfiles.vendor.id,
    vendorName: DummyProfiles.vendor.name,
    userId: DummyProfiles.community.id,
    userName: DummyProfiles.community.name,
    userRole: DummyProfiles.community.role,
    productName: "USB-C Hub Multiport Adapter",
    messages: [
      {
        id: 'm_2_1',
        senderType: 'system',
        text: generateAutomatedPurchaseMessage(DummyProfiles.vendor.name, 'ORD-7741'),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
      },
      {
        id: 'm_2_2',
        senderType: 'vendor',
        text: VendorMessageOptions[1].text, // Ready for pickup
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
      }
    ]
  },
  {
    conversationId: 'conv_3',
    vendorId: DummyProfiles.vendor.id,
    vendorName: DummyProfiles.vendor.name,
    userId: DummyProfiles.faculty.id,
    userName: DummyProfiles.faculty.name,
    userRole: DummyProfiles.faculty.role,
    productName: "Mechanical Keyboard Keycaps",
    messages: [
      {
        id: 'm_3_1',
        senderType: 'system',
        text: generateAutomatedPurchaseMessage(DummyProfiles.vendor.name, 'ORD-1092'),
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 2 days ago
      },
      {
        id: 'm_3_2',
        senderType: 'vendor',
        text: VendorMessageOptions[2].text, // On the way
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
      }
    ]
  }
];
