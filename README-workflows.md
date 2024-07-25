# Workflows

## Booking Services

### Considerations of Booking System

- Update admin users' Google/Microsoft calendar with booked services.
- Handle situations where more than one service can overlap.
  - Example: While waiting for Client 1's hair color to set, Client 2 can get nails done.

### Client Flow

#### A. Happy Path

1. **View Services**: User should be able to view all services.
2. **Select Services**: User can select one or many services.
3. **Booking Options**: User has the option to book multiple services at the same time or separately.
4. **View Calendar**: User can view a calendar with available and unavailable time slots for booking.
5. **Select Time Slot**: User can select a time slot to book service(s).
6. **Payment Information**: User enters information into a payment system (for last-minute cancellations).
7. **Confirm Booking**: User confirms booking time and cost.
8. **Verification Email**: User receives a verification email.
9. **Follow-up Email**: User receives a follow-up email as the date approaches and has a chance to cancel; otherwise, they will be charged.

#### B. Cancellation (User with Profile)

> Cancels late, but has confirmed they would attend

1. User confirms a booking time and saves payment information.
2. User confirms follow-up email for service(s).
3. User cancels last minute by navigating to the dashboard to cancel.
4. User receives a cancellation email.
5. Admin receives a cancellation email.
6. System updates reserved time slots to show availability.
7. User is charged a cancellation fee.

#### C. Cancellation (Guest User)

> Cancels late, but has confirmed they would attend

1. User confirms time and saves payment information.
2. User confirms follow-up email.
3. User contacts Admin by phone or email.
4. Admin uses CMS to view all bookings and cancels this booking manually.
5. System updates time slots to be available.

#### D. No Call No Show (Guest or User with Profile)

> Client never shows to appointment

1. User confirms time and saves payment information.
2. User confirms follow-up email.
3. User does not show up to the appointment.
4. User is charged the cancellation fee (as agreed upon when booking).
5. System does not need to update time slots as this is too late.

### Admin Flow

- **View Jobs**: Admin can view existing jobs provided.
- **Manage Jobs**: Admin can CRUD existing jobs.
- **View Bookings**: Admin can view existing bookings by clients.
- **Manage Bookings**: Admin can CRUD existing bookings by clients.

1. **Empty Calendar**: Admin can view an empty calendar in the scheduling section.
2. **Drag and Drop**: Admin can drag and drop a period of time for a day to indicate availability.
3. **Save Availability**: Admin saves the selected section of time to the database.
   - These times are divided into 15-minute chunks and saved to the DB with a status of 'available' or 'unavailable'.
4. **Manage Time Slots**: Admin can view these time slots in the bookings section where they can be deleted or edited.

### Questions

1. What if the admin wants to create a whole week's worth of availability? Does the drag and drop make sense anymore?
   - Can we use drag and drop, then add a copy to N number of days feature?
2. What does editing look like for these? Should we allow editing of time slots if we keep them at 15-minute chunks?
3. What are other ideas or ways of generating time slots that could be as easy as drag and dropping?
4. How do existing booking services/meeting apps handle generating available time slots (e.g., Google Calendar, Microsoft Calendar, Booksly)?

---

### Drag and Drop Pros and Cons

| **Pros**                                                                      | **Cons**                                                                                                    |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Easy to parse visually when the user is interfacing directly with a calendar. | Bulk creation is difficult.                                                                                 |
| Using the calendar package allows for a lot of customization.                 | Need to customize the calendar view to look good and be readable (requires learning a third-party package). |
| Easy to customize each day.                                                   | Adding buffer time between services might be challenging.                                                   |
| Simple UI that is very intuitive and easy to use.                             | Generating time slots on the backend requires careful logic to avoid bugs.                                  |
| Easy to generate time slots on the backend for a single day.                  |                                                                                                             |

### Form input ideas

- invitees cant schedule within range
